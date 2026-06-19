import { useEffect, useState } from 'react'
import './styles.css'
import { getElectron } from './utils/electron'
import { AuthPage } from './components/AuthPage'
import { Dashboard } from './components/Dashboard'

function App() {
  const [userInfo, setUserInfo] = useState(null)
  const [appConfig, setAppConfig] = useState(null)
  const [updateInfo, setUpdateInfo] = useState(null)
  const [windowMaximized, setWindowMaximized] = useState(false)

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const cfg = await getElectron().getAppConfig?.()
        if (cfg && typeof cfg === 'object') setAppConfig(cfg)
      } catch (err) {
        console.error('[App] loadConfig failed:', err?.message || err)
      }
    }

    const loadUpdateInfo = async () => {
      try {
        const info = await getElectron().getUpdateInfo?.()
        if (info && typeof info === 'object') setUpdateInfo(info)
      } catch (err) {
        console.error('[App] loadUpdateInfo failed:', err?.message || err)
      }
    }

    const restoreSession = async () => {
      try {
        const status = await getElectron().getStatus?.()
        if (!status?.hasToken) {
          setUserInfo(null)
          return
        }
        const res = await getElectron().fetchUserInfo?.()
        if (res?.data) setUserInfo(res)
      } catch {
        console.error('[App] restoreSession failed')
        setUserInfo(null)
      }
    }

    loadConfig()
    loadUpdateInfo()
    restoreSession()

    const syncWindowState = async () => {
      try {
        const status = await getElectron().isWindowMaximized?.()
        setWindowMaximized(!!status?.maximized)
      } catch (err) {
        console.error('[App] window state sync failed:', err?.message || err)
      }
    }

    syncWindowState()

    const electron = getElectron()
    const unsubscribeUpdate = electron.onUpdateInfo?.((info) => {
      if (info && typeof info === 'object') setUpdateInfo(info)
    })
    return () => {
      if (typeof unsubscribeUpdate === 'function') unsubscribeUpdate()
    }
  }, [])

  useEffect(() => {
    const onResize = async () => {
      try {
        const status = await getElectron().isWindowMaximized?.()
        setWindowMaximized(!!status?.maximized)
      } catch {}
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleLoginSuccess = async () => {
    const res = await getElectron().fetchUserInfo?.()
    if (res?.data) {
      setUserInfo(res)
    }
  }

  const handleLogout = async () => {
    await getElectron().logout?.()
    setUserInfo(null)
  }

  const handleMinimize = () => {
    getElectron().minimizeWindow?.()
  }

  const handleToggleMaximize = async () => {
    try {
      const res = await getElectron().toggleMaximizeWindow?.()
      if (typeof res?.maximized === 'boolean') setWindowMaximized(res.maximized)
      else setWindowMaximized((value) => !value)
    } catch (err) {
      console.error('[App] toggle maximize failed:', err?.message || err)
    }
  }

  const handleClose = () => {
    getElectron().hideWindow?.()
  }

  return (
    <div className="app">
      <div className="window-header">
        <div className="window-controls" aria-label="Window controls">
          <button className="window-control window-control-close" onClick={handleClose} aria-label="关闭窗口" />
          <button className="window-control window-control-minimize" onClick={handleMinimize} aria-label="最小化窗口" />
          <button
            className={`window-control window-control-maximize ${windowMaximized ? 'is-maximized' : ''}`}
            onClick={handleToggleMaximize}
            aria-label={windowMaximized ? '还原窗口' : '最大化窗口'}
          />
        </div>
        <div className="window-title">
          {appConfig?.window_title || `${appConfig?.app_name || 'v2Board'} · ${appConfig?.client_name || 'Mihomo'}`}
        </div>
      </div>
      {updateInfo?.available && (
        <div className="update-banner">
          <div className="update-banner-copy">
            <div className="update-banner-title">发现新版本</div>
            <div className="update-banner-sub">
              当前 {updateInfo.localVersion || '未知'}，最新 {updateInfo.latestVersion || '未知'}
            </div>
            {updateInfo.releaseNotes && <div className="update-banner-note">{updateInfo.releaseNotes}</div>}
          </div>
          <button
            className="update-banner-btn"
            onClick={() => {
              const url = updateInfo.downloadUrl || updateInfo.releaseUrl || updateInfo.manifestUrl
              if (url) getElectron().openExternal?.(url)
            }}
          >
            立即更新
          </button>
        </div>
      )}
      <div className="content">
        {!userInfo ? (
          <AuthPage appConfig={appConfig} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Dashboard userInfo={userInfo} onLogout={handleLogout} />
        )}
      </div>
    </div>
  )
}

export default App
