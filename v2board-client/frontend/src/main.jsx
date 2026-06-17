import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Electron IPC bridge - 在主进程中注入
if (typeof process !== 'undefined' && process.versions?.electron) {
  window.__ELECTRON__ = {
    login: (email, password) => window.require('electron').ipcRenderer.invoke('login', email, password),
    register: (email, password, emailCode, inviteCode) =>
      window.require('electron').ipcRenderer.invoke('register', email, password, emailCode, inviteCode),
    fetchUserInfo: () => window.require('electron').ipcRenderer.invoke('fetch-user-info'),
    fetchSubscribe: () => window.require('electron').ipcRenderer.invoke('fetch-subscribe'),
    fetchPlans: () => window.require('electron').ipcRenderer.invoke('fetch-plans'),
    fetchServers: () => window.require('electron').ipcRenderer.invoke('fetch-servers'),
    fetchStat: () => window.require('electron').ipcRenderer.invoke('fetch-stat'),
    toggleProxy: () => window.require('electron').ipcRenderer.invoke('toggle-proxy'),
    setSelectedServer: (name) => window.require('electron').ipcRenderer.invoke('set-selected-server', name),
    setServer: (url) => window.require('electron').ipcRenderer.invoke('set-server', url),
    getStatus: () => window.require('electron').ipcRenderer.invoke('get-status'),
    onProxyStatus: (cb) => window.require('electron').ipcRenderer.on('proxy-status', (_, status) => cb(status)),
    onTraffic: (cb) => window.require('electron').ipcRenderer.on('traffic-update', (_, traffic) => cb(traffic)),
    logout: () => window.require('electron').ipcRenderer.invoke('logout'),
    quit: () => window.require('electron').ipcRenderer.send('quit'),
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
