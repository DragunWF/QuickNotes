const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");
const GeneralTool = require("./utils/generalTool");

let mainWindow;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(GeneralTool.getPagePath("index"));
});

app.on("window-all-closed", () => {
  app.quit();
});
