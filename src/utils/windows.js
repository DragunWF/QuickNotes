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
  static #sourceCodeWindow;

  static createMainMenu() {
    this.#mainWindow = this.#createDefaultWindow();
    this.#mainWindow.loadURL(GeneralTool.getPagePath("index"));
  }

  static createRickRollWindow() {
    this.#rickRollWindow = this.#createDefaultWindow();
    this.#rickRollWindow.loadURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }

  static createSourceCodeWindow() {
    this.#sourceCodeWindow = this.#createDefaultWindow();
    this.#sourceCodeWindow.loadURL("https://github.com/DragunWF/QuickNotes");
  }

  static #createDefaultWindow() {
    return new BrowserWindow(this.#defaultSettings);
  }
}

module.exports = Windows;
