const { ipcRenderer } = require("electron");
window.$ = window.jQuery = require("../js/jquery-3.6.0.min.js");

const categories = $(".category-list");

ipcRenderer.on("load:categories", (event, data) => {
  if (data.length) {
    for (let i = 0; i < data.length; i++) {
      categories.append(
        `<li class=".category-button" id="category${i}"><button>${data.name}</button></li>`
      );
    }
  } else {
    const tag = "<li>No categories, click add to make one</li>";
    categories.append(tag);
  }
});
