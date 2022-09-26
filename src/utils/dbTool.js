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
    console.log(
      this.#db ? "Database is now running!" : "Database failed to start!"
    );
  }

  static async getNoteCategories() {
    return await this.#getTableContents("categories");
  }

  static async getNote(noteID) {
    return await this.#getTableContents(true, noteID);
  }

  static async #getTableContents(tableName, whereClause = false, id = null) {
    let query = `SELECT * FROM ${tableName}`;
    if (whereClause) query += ` WHERE note_id = ${id}`;

    const rows = new Promise((resolve, reject) => {
      this.#db.all(query, (err, rows) => {
        if (err) return console.error(err.message);
        resolve(rows);
      });
    });

    return await rows;
  }
}

module.exports = DatabaseTool;
