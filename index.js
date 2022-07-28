let tabsHeader = document.querySelector(".tabs__header");
let tabsContent = document.querySelectorAll(".tabs__content-item");

function changeClass(el) {
  for (let i = 0; i < tabsHeader.children.length; i++) {
    tabsHeader.children[i].classList.remove("active");
    tabsHeader.children[i].setAttribute("data-tab", i);
  }
  el.classList.add("active");
}

tabsHeader.addEventListener("click", (event) => {
  changeClass(event.target);

  tabsContent.forEach((item, index) => {
    item.classList.remove("active");
    item.setAttribute("data-content", index);

    if (item.dataset.content === event.target.dataset.tab) {
      item.classList.add("active");
    }
  });
});
