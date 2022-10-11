const { ipcRenderer } = require("electron");
window.$ = window.jQuery = require("../js/jquery-3.6.0.min.js");

const categories = $(".category-list");
const notes = $(".note-list");

function grabID(eventID) {
  return eventID.split("@")[1];
}

function createEvents(classType) {
  switch (classType) {
    case "category":
      $(".category").click((event) => {
        ipcRenderer.send("window:category", grabID(event.target.id));
      });
      break;
    case "note":
      $(".note").click((event) => {
        ipcRenderer.send("window:note", grabID(event.target.id));
      });
      break;
  }
}

ipcRenderer.on("load:categories", async (event, data) => {
  const categoriesData = await data;
  $("#loadingText").remove();

  if (categoriesData.length) {
    for (let i = 0; i < categoriesData.length; i++) {
      categories.append(
        `<li>
           <button type="button" class="category id="item@${i + 1}">
             ${categoriesData[i].name}
           </button>
         </li>`
      );
    }
    createEvents("category");
  } else {
    const tag = "<li>No categories, click add to make one</li>";
    categories.append(tag);
  }
});

ipcRenderer.on("load:category", async (event, data) => {
  const categoryData = await data;
  $("#loadingText").remove();

  if (categoryData.length) {
    for (let i = 0; i < categoryData.length; i++) {
      notes.append(
        `<li>
          <button type="button" class="note" id="note@${i + 1}">
           ${categoryData[i].name}
          </button>
        </li>`
      );
    }
    createEvents("note");
  } else {
    const tag = `<li>No notes in this category, click add to add a note</li>`;
    notes.append(tag);
  }
});
