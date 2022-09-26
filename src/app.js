const { app, Menu, ipcMain } = require("electron");
const GeneralTool = require("./utils/generalTool");
const DatabaseTool = require("./utils/dbTool");
const Windows = require("./utils/windows");
const menuTemplate = require("./utils/menuTemplate");

// App Events Handlers
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

// ipcMain Events Handlers
ipcMain.on("window:categories", () => {
  Windows.loadCategoriesWindow();
  console.log("Entered categories window!");
});

ipcMain.on("window:category", (event, categoryID) => {
  Windows.loadCategoryWindow(categoryID);
  console.log(`Entered a category window! (ID: ${categoryID})`);
});

ipcMain.on("window:note", (event, noteID) => {
  Windows.loadNoteWindow(noteID);
  console.log(`Entered a note window! (ID: ${noteID})`);
});

ipcMain.on("quit", () => {
  app.quit();
});
