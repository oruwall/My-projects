// import forms from "./modules/forms";
// import "./slick.min";
// import "./modules/scroll";
// import "./modules/lightbox-plus-jquery.min";
// import topSlider from "./modules/topSlider";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {};

  // modals();
  // forms(modalState);

  //! Burgher

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

  //! Anchor to another page

  $(document).ready(function () {
    if (window.location.hash != "") {
      // Get the hash value and remove the # from it.
      var hash = window.location.hash.substr(1);
      console.log(hash);

      // In the nav-tabs,
      // find the right tab by targetting the `h4` which contains the word you used has a hash
      // and click it.
      $(".nav-product")
        .find("a:constains('" + hash + "')")
        .click();

      // let cry = find("a:constains('" + scaune + "')");
      // console.log(cry);
    }
  });

  //! PRODUCT JS

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

  //! PRODUCT JS

  $(document).ready(function () {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".slider-nav").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
});

//! Burgher
