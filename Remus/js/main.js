$(document).ready(function () {
  $(".header__burgher").click(function (event) {
    $(".header__burgher, .nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".nav__link").click(function (event) {
    $(".header__burgher, .nav").removeClass("active");
    $("body").removeClass("lock");
  });
});

//! Top Slider

$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    dots: true,
  });
});

//! Tabs

const tabsBtn = document.querySelectorAll(".order-describe");
const tabsItems = document.querySelectorAll(".order-images");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

document.querySelector(".tabs__nav-btn").click();
