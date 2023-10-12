window.addEventListener("load", function () {
  const swiper = new Swiper(".projects-swiper", {
    speed: 900,
    loop: false,
    spaceBetween: 24,
    autoHeight: true,
    mousewheel: true,
    slidesPerView: 1,
    keyboard: true,


    navigation: {
      nextEl: ".projects-navigation__next",
      prevEl: ".projects-navigation__prev",
    },
  });

  // projectsMedia.controller.control = projectsInfo;
  // projectsInfo.controller.control = projectsMedia;
});
