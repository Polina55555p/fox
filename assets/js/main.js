$(document).ready(function() {
    $('.slider').slick({
        centerMode: true,
        arrows: false,
        dots: true,
        adaptiveheight: true,
        slidesToShow: 1,
        speed: 1000,
        autoplay: true,
        aytoplaySpeed: 1000,
        pauseOnFocus: true,
        vertical: true,
        centerPadding: '390px',
        draggable: false,
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                vertical: false,
                dots: false,
                centerPadding: '0px',
              }
            },
           
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("8(999) 999-9999");
});

$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone1").mask("8(999) 999-9999");
});

