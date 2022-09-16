const path = require("path");

class GeneralTool {
  static getPagePath(htmlFile) {
    const file = `${htmlFile}.html`;
    return `file:///${path.join(__dirname, "..", "pages/html/", file)}`;
  }
}

module.exports = GeneralTool;
