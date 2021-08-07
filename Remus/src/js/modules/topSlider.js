const topSlider = (selector) => {
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
};

export default topSlider;
