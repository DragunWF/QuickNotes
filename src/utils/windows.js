const { BrowserWindow, ipcMain } = require("electron");
const GeneralTool = require("./generalTool");
const DatabaseTool = require("./dbTool");

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

  static loadCategoriesWindow() {
    this.#changeCurrentWindow("categories", "load:categories");
  }

  static loadNoteWindow() {
    this.#changeCurrentWindow("note", "load:note");
  }

  static #changeCurrentWindow(page, loadSignal = null, noteID = null) {
    const currentWindow = BrowserWindow.getFocusedWindow();
    let data = null;
    if (loadSignal) {
      const signalType = loadSignal.split(":")[1];
      switch (signalType) {
        case "note":
          data = DatabaseTool.getNote(noteID);
          break;
        case "categories":
          data = DatabaseTool.getNoteCategories();
          break;
        case "stats":
          break;
      }
      currentWindow.webContents.send(loadSignal, data);
    }
    currentWindow.loadURL(GeneralTool.getPagePath(page));
  }

  static #createDefaultWindow() {
    return new BrowserWindow(this.#defaultSettings);
  }
}

module.exports = Windows;
