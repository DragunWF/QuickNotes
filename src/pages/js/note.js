const { ipcRenderer } = require("electron");
window.$ = window.jQuery = require("../js/jquery-3.6.0.min.js");

ipcRenderer.on("load:note", (event, note) => {
  return;
});
