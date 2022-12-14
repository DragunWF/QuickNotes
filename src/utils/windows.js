const { BrowserWindow } = require("electron");
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

  static loadCategoryWindow(categoryID) {
    this.#changeCurrentWindow("category", "load:category", categoryID);
  }

  static loadNoteWindow(noteID) {
    this.#changeCurrentWindow("note", "load:note", noteID);
  }

  static #changeCurrentWindow(page, loadSignal = null, id = null) {
    const currentWindow = BrowserWindow.getFocusedWindow();
    let data = null;
    currentWindow.loadURL(GeneralTool.getPagePath(page));

    if (loadSignal) {
      const signalType = loadSignal.split(":")[1];

      switch (signalType) {
        case "note":
          data = DatabaseTool.getNote("note_id", id);
          break;
        case "category":
          data = DatabaseTool.getCategory("category_id", id);
          break;
        case "categories":
          data = DatabaseTool.getNoteCategories();
          break;
        case "stats":
          data = DatabaseTool.getStats();
          break;
      }

      setTimeout(async () => {
        currentWindow.webContents.send(loadSignal, await data);
      }, 325);
    }
  }

  static #createDefaultWindow() {
    return new BrowserWindow(this.#defaultSettings);
  }
}

module.exports = Windows;
