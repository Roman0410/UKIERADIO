$(document).ready(function () {
  $(".header-burger").click(function (event) {
    $(".header-nav").toggleClass("active");
    $(".header-burger").toggleClass("active");
  });
  $(".select-location").click(function (event) {
    $(this).closest("div").find("img").toggleClass("open");
    $(".location-list").toggleClass("hidden");
  });
  $(".location-item").click(function (event) {
    $(".location-item").removeClass("select");
    $(this).toggleClass("select");
    $(".location-txt").text($(".select").text());
  });
});
