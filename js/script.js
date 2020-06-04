var mySwiper = new Swiper(".hero-slider", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".hero-button-next",
    prevEl: ".hero-button-prev",
  },
});

var swiper = new Swiper(".products-slider", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: ".products-pagination",
  },
});
