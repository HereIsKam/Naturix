var mySwiper = new Swiper('.hero-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
var mySwiperProducts = new Swiper('.products-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.products-slider-button-prev',
    prevEl: '.products-slider-button-next',
  },
  pagination: {
    el: '.swiper-pagination',
  },
})