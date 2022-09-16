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
  static #rickRollWindow;

  static createMainMenu() {
    this.#mainWindow = new BrowserWindow(this.#defaultSettings);
    this.#mainWindow.loadURL(GeneralTool.getPagePath("index"));
  }

  static createRickRollWindow() {
    this.#rickRollWindow = new BrowserWindow(this.#defaultSettings);
    this.#rickRollWindow.loadURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
}

module.exports = Windows;
