const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
})

contextBridge.exposeInMainWorld('os', {
  cpus: () => ipcRenderer.invoke('cpusInfo'),
  memory: () => ipcRenderer.invoke('memoryInfo'),
  openExplorer: () => ipcRenderer.invoke('openFileExplorer'),
  openGame: (path) => ipcRenderer.invoke('openGame', path),
  saveGames: (games) => ipcRenderer.invoke('saveGames', games),
  getGames: () => ipcRenderer.invoke('getGames'),
})

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.versions[dependency])
  }
})