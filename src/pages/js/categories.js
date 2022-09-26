const { ipcRenderer } = require("electron");
window.$ = window.jQuery = require("../js/jquery-3.6.0.min.js");

const categories = $(".category-list");
const category = $(".category");

ipcRenderer.on("load:categories", async (event, data) => {
  const categoryData = await data;
  $("#loadingText").remove();
  if (categoryData.length) {
    for (let i = 0; i < categoryData.length; i++) {
      categories.append(
        `<li class=".category" id="category@${i + 1}">
           <button>${categoryData[i].name}</button>
         </li>`
      );
    }
  } else {
    const tag = "<li>No categories, click add to make one</li>";
    categories.append(tag);
  }
});
