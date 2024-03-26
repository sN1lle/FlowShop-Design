var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    breakpoints: {
        1251: {
            spaceBetween: 40,
            slidesPerView: 3,
        },

        951: {
            spaceBetween: 40,
            slidesPerView: 2,
        },

        0: {
            spaceBetween: 40,
            slidesPerView: 1,
        },
    },
  });

  

  