const { app, BrowserWindow } = require('electron');
const electron = require('electron');
const path = require('path');
const url = require('url')

// Enable live reload for Electron too
/*
require('electron-reload')(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
});
*/

let mainWindow;


function createWindow () {
  mainWindow = new BrowserWindow({width: 1280, height: 800})
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  mainWindow.on('closed', function () {
    mainWindow = null
  });

  // if the render process crashes, reload the window
  mainWindow.webContents.on('crashed', () => {
    mainWindow.destroy();
    createWindow();
  });

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
