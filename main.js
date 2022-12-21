const { app, BrowserWindow, ipcMain } = require('electron')
const os = require('os')
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.handle('cpusInfo', () => os.cpus())

  ipcMain.handle('memoryInfo', () => ({
    freemem: os.freemem(),
    totalmem: os.totalmem(),
  }))

  // win.loadFile('dist/index.html')
  win.loadURL('http://localhost:5173/')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
