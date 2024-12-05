// main.js
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Initialize Swiper 
const swiper = new Swiper('.mySwiper', { 
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ScrollReveal animations
ScrollReveal().reveal('.header__content, .stats__container, .skill__content, .skill__grid, .portfolio__content, .portfolio__image, .section__video, .contact__container', { 
  origin: 'top',
  distance: '40px',
  duration: 1000,
  interval: 200,
  reset: true 
});