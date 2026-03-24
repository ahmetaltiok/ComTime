const { app, BrowserWindow, ipcMain, globalShortcut, Tray, Menu, screen } = require('electron');
const path = require('path');

let mainWindow, tray;

function createWindow() {
  const { width: sw, height: sh } = screen.getPrimaryDisplay().workAreaSize;

  mainWindow = new BrowserWindow({
    width: Math.round(sw * 0.72),
    height: Math.round(sw * 0.72 * 0.38),
    minWidth: 700,
    minHeight: 320,
    frame: false,
    backgroundColor: '#e8e6e1',
    resizable: true,
    alwaysOnTop: true,
    show: false,
    title: 'ComTime',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  mainWindow.loadFile('index.html');
  mainWindow.once('ready-to-show', () => mainWindow.show());

  ipcMain.on('win-minimize', () => mainWindow && mainWindow.minimize());
  ipcMain.on('win-maximize', () => {
    if (!mainWindow) return;
    mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
  });
  ipcMain.on('win-close', () => mainWindow && mainWindow.close());
  ipcMain.on('win-pin', (_, v) => mainWindow && mainWindow.setAlwaysOnTop(v));

  mainWindow.on('closed', () => { mainWindow = null; });
}

function createTray() {
  try { tray = new Tray(path.join(__dirname, 'icon.png')); } catch(e) { return; }
  tray.setToolTip('ComTime');
  tray.setContextMenu(Menu.buildFromTemplate([
    { label: 'ComTime', enabled: false },
    { type: 'separator' },
    { label: 'Göster', click: () => { if(mainWindow) { mainWindow.show(); mainWindow.focus(); } } },
    { label: 'Gizle', click: () => { if(mainWindow) mainWindow.hide(); } },
    { type: 'separator' },
    { label: 'Çıkış', click: () => app.quit() }
  ]));
  tray.on('click', () => { if(mainWindow) { mainWindow.show(); mainWindow.focus(); } });
}

app.whenReady().then(() => {
  createWindow();
  createTray();
  globalShortcut.register('CommandOrControl+Shift+T', () => {
    if(mainWindow) mainWindow.isVisible() ? mainWindow.hide() : (mainWindow.show(), mainWindow.focus());
  });
});

app.on('window-all-closed', () => app.quit());
app.on('will-quit', () => globalShortcut.unregisterAll());
