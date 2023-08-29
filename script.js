
function mainSlider(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
mainSlider();
function wedSlider(){
  var swiper = new Swiper(".mySwiper2", {
    cssMode: true,
    spaceBetween: 1,
    slidesPerView: 5,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });
}
wedSlider();

function travSlider(){
  var swiper = new Swiper(".mySwiper3", {
    cssMode: true,
    spaceBetween: 1,
    slidesPerView: 5,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });
}
travSlider();
function beautySlider(){
  var swiper = new Swiper(".mySwiper3:nth-child(2)", {
    cssMode: true,
    spaceBetween: 1,
    slidesPerView: 5,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
  });
}
beautySlider();