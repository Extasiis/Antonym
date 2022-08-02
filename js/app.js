  var swiper = new Swiper(".mySwiper", {
    loop: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 260,
      depth: 800,
      modifier: 1.5,
    },
    loop: true,
    thumbs: {
      swiper: swiper
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    keyboard: true,
  });

  function nav(){
    const navegation = document.querySelector('.navegador__icoNav');
    const menu = document.querySelector('.navegador__lista');
    
    navegation.classList.toggle("active");
    menu.classList.toggle("active")
  }