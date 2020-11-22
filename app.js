const { app, BrowserWindow } = require('electron')
const { PythonShell } = require('python-shell')
const url = require("url");
const path = require("path");

let appWindow

function initWindow() {
    appWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    appWindow.loadURL('http://localhost:4200')

    appWindow.webContents.openDevTools()

    appWindow.on('closed', function () {
        appWindow = null
    })
}

app.on('ready', () => {
    initWindow()

    const options = {
        mode: 'text'
    }

    PythonShell.run('server/server.py', options, (err, result) => {
        if (err) throw err
        console.log('Server started....', result)
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (win === null) {
        initWindow()
    }
})