// //! Tabs

// const tabsBtnPro = document.querySelectorAll(".nav__link-product");
// const tabsItemsPro = document.querySelectorAll(".shop-item");

// tabsBtnPro.forEach(onTabClick);

// function onTabClick(item) {
//   item.addEventListener("click", function () {
//     let currentBtn = item;
//     let tabId = currentBtn.getAttribute("data-tab");
//     let currentTab = document.querySelector(tabId);

//     if (!currentBtn.classList.contains("active")) {
//       tabsBtnPro.forEach(function (item) {
//         item.classList.remove("active");
//       });

//       tabsItemsPro.forEach(function (item) {
//         item.classList.remove("active");
//       });

//       currentBtn.classList.add("active");
//       currentTab.classList.add("active");
//     }
//   });
// }

$(function () {
  $("ul.tabs__caption").on("click", "li:not(.active)", function (e) {
    e.preventDefault();
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("section.tabs")
      .find("div.tabs__content")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });
});
