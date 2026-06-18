import { useEffect, useState } from 'react'
import './styles.css'
import { getElectron } from './utils/electron'
import { AuthPage } from './components/AuthPage'
import { Dashboard } from './components/Dashboard'

function App() {
  const [userInfo, setUserInfo] = useState(null)
  const [appConfig, setAppConfig] = useState(null)

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const cfg = await getElectron().getAppConfig?.()
        if (cfg && typeof cfg === 'object') setAppConfig(cfg)
      } catch (err) {
        console.error('[App] loadConfig failed:', err?.message || err)
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
    restoreSession()
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

  return (
    <div className="app">
      <div className="drag-bar" />
      <div className="header">
        <span className="header-title">
          {appConfig?.window_title || `${appConfig?.app_name || 'v2Board'} · ${appConfig?.client_name || 'Mihomo'}`}
        </span>
        <button className="close-btn" onClick={() => getElectron().quit?.()}>✕</button>
      </div>
      <div className="content">
        {!userInfo ? (
          <AuthPage appConfig={appConfig} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <Dashboard userInfo={userInfo} appConfig={appConfig} onLogout={handleLogout} />
        )}
      </div>
    </div>
  )
}

export default App
