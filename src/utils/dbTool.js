const sqlite3 = require("sqlite3");

class DatabaseTool {
  static #db;

  static onReady() {
    this.#db = new sqlite3.Database(
      "./data/appDB.sqlite3",
      sqlite3.OPEN_READWRITE,
      (err) => {
        if (err) return console.error(err.message);
      }
    );
    if (this.#db) console.log("Database is now online!");
  }
}

module.exports = DatabaseTool;
