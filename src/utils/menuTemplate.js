const { app } = require("electron");
const Windows = require("./windows");

const menuTemplate = [
  {
    label: "General",
    submenu: [
      {
        label: "Notes",
        accelerator: "Ctrl+N",
      },
      {
        label: "Stats",
        accelerator: "Ctrl+S",
      },
      {
        label: "Quit",
        accelerator: "Ctrl+Q",
        click() {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Miscellaneous",
    submenu: [
      {
        label: "Source Code",
        click() {
          Windows.createSourceCodeWindow();
        },
      },
      {
        label: "Secret",
        click() {
          Windows.createRickRollWindow();
        },
      },
    ],
  },
  {
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle DevTools",
        accelerator: "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: "reload",
      },
    ],
  },
];

module.exports = menuTemplate;
