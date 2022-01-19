import Swiper, {Navigation, Pagination, Scrollbar} from 'swiper';

Swiper.use([Navigation, Pagination, Scrollbar]); // тут нужно массив передавать

new Swiper(".my-slider", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  }
});
