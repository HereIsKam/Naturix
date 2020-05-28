var mySwiper = new Swiper('.hero-slider', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.products-slider', {

  direction: 'horizontal',
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },

});