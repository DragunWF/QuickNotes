const { ipcRenderer } = require("electron");
window.$ = window.jQuery = require("../js/jquery-3.6.0.min.js");

const htmlDirPath = "file:///E:/DevStuff/GitHub Repositories/QuickNotes/src/pages/html/";
const notesBtn = $("#notesBtn");
const statsBtn = $("#statsBtn");
const quitBtn = $("#quitBtn");

notesBtn.click(() => {
  ipcRenderer.send("window:categories")
});

statsBtn.click(() => {
  ipcRenderer.send("window:stats");
});

quitBtn.click(() => {
  ipcRenderer.send("quit");
});
