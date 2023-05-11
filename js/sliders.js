$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  cssEase: "linear",
});
$(".news-slider").slick({
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
});
$(".chart-list").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
