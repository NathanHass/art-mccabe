(function () {
  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    keyboardControl: true,
    loop: true
  });

  $(window).load(function() {
   // executes when complete page is fully loaded, including all frames, objects and images
    mySwiper;
  });
}) ();

