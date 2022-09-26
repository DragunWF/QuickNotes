const { app, Menu, ipcMain } = require("electron");
const GeneralTool = require("./utils/generalTool");
const DatabaseTool = require("./utils/dbTool");
const Windows = require("./utils/windows");
const menuTemplate = require("./utils/menuTemplate");

app.on("ready", () => {
  Windows.createMainMenu();
  DatabaseTool.onReady();
  const windowMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(windowMenu);
  console.log("Application is now running!");
});

app.on("window-all-closed", () => {
  app.quit();
});

ipcMain.on("quit", () => {
  app.quit();
});
