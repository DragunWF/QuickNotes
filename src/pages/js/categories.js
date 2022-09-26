const { ipcRenderer } = require("electron");
window.$ = window.jQuery = require("../js/jquery-3.6.0.min.js");

const categories = $(".category-list");

function createEvents() {
  $(".category").click((event) => {
    const id = event.target.id;
    console.log(`Entered note with id: ${id}`);
  });
}

ipcRenderer.on("load:categories", async (event, data) => {
  const categoryData = await data;
  $("#loadingText").remove();
  if (categoryData.length) {
    for (let i = 0; i < categoryData.length; i++) {
      categories.append(
        `<li>
           <button type="button" class="category" id="item@${i + 1}">
             ${categoryData[i].name}
           </button>
         </li>`
      );
    }
    createEvents();
  } else {
    const tag = "<li>No categories, click add to make one</li>";
    categories.append(tag);
  }
});
