export function getElectron() {
  return window.electronAPI || window.__ELECTRON__ || {}
}
