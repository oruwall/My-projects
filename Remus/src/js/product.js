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
