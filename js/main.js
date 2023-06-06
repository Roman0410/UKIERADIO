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
  $(".chart-item").click(function (event) {
    $(".video-popup").toggleClass("open");
    $(".video-popup").find("iframe").attr("src", $(this).data("src"));
  });
  function stopVideo() {
    let video = $("#youtube-video");
    let videoSrc = video.attr("src");
    video.attr("src", videoSrc);
  }
  $(".video-close").click(function (event) {
    $(".video-popup").removeClass("open");
    stopVideo();
  });
});
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
