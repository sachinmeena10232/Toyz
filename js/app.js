// Elements
const btnToggler = document.querySelector(".btn--toggler");

// Functions
const runSwiper = function (swiper, options) {
  return new Swiper(swiper, options);
};
const toggleMenu = function () {
  const lists = document.querySelectorAll(".list.list--row");
  lists.forEach(lst => lst.classList.toggle("active"));
};

// Calls
const homeSwiper = runSwiper(".homeSwiper", {
  grabCursor: true,
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const newsSwiper = runSwiper(".newsSwiper", {
  grabCursor: true,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination-news",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-news",
    prevEl: ".swiper-button-prev-news",
  },
});
const productsSwiper = runSwiper(".productsSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1300: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
btnToggler.addEventListener("click", toggleMenu);
