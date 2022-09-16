const { BrowserWindow } = require("electron");
const GeneralTool = require("./generalTool");

class Windows {
  static #defaultSettings = {
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  };
  static #mainWindow;

  static createMainMenu() {
    this.#mainWindow = new BrowserWindow(this.#defaultSettings);
    this.#mainWindow.loadURL(GeneralTool.getPagePath("index"));
  }
}

module.exports = Windows;
