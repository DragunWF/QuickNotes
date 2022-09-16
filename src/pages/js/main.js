const { ipcRenderer } = require("electron");
window.$ = window.jQuery = require("../js/jquery-3.6.0.min.js");

const htmlDirPath = "file:///E:/DevStuff/GitHub Repositories/QuickNotes/src/pages/html/";
const notesBtn = $("#notesBtn");
const statsBtn = $("#statsBtn");
const quitBtn = $("#quitBtn");

notesBtn.click(() => {
  switchPageURL("categories");
});

statsBtn.click(() => {
  switchPageURL("stats");
});

quitBtn.click(() => {
  ipcRenderer.send("quit");
});

function switchPageURL(htmlFile) {
  location.href = `${htmlDirPath}${htmlFile}.html`;
}
