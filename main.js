const { app, BrowserWindow, ipcMain } = require('electron')
const { spawn } = require('node:child_process')

const os = require('os')
const fs = require('fs')
const path = require('path')

function createWindow() {
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

  ipcMain.handle('getGames', (params, games) => {
    const file = fs.readFileSync('src/data/games.json')
    return JSON.parse(file)
  })

  ipcMain.handle('saveGames', (params, game) => {
    const file = fs.readFileSync('src/data/games.json')
    const games = JSON.parse(file)

    games.push(game)

    console.log(games);
    // fs.writeFileSync('src/data/games.json', JSON.stringify(games));
    return true;
  })

  ipcMain.handle('openFileExplorer', () => {
    const ls = spawn('nemo', ['--browser', os.userInfo().homedir])

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`)
    })

    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  })

  ipcMain.handle('openGame', (params, gamePath) => {
    const normalizedPath = (os.userInfo().homedir + gamePath).replace(/(\s+)/g, '\\$1')
    const ls = spawn('wine', ['', normalizedPath], {
      shell: true,
    });

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  })

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
