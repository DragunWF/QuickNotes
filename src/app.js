const { app, Menu, ipcMain } = require("electron");
const GeneralTool = require("./utils/generalTool");
const Windows = require("./utils/windows");
const menuTemplate = require("./utils/menuTemplate");

app.on("ready", () => {
  Windows.createMainMenu();
  const windowMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(windowMenu);
});

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("quit", () => {
  app.quit();
});
