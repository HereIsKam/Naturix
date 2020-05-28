var mySwiper = new Swiper('.hero-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.products-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  centeredSlides: true,
  el: {
    pagination: `.swiper-pagination`
  },
});