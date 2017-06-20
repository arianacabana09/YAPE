$(_ =>{
  const sliderIntro = $('<div id="slider-img" class="owl-nome owl-carousel"></div>');

  const slider1 = $('<div id="slider1" class="item"><img src="img/icons/icon-people.png" alt="slider1"/></div>');
  const texto1 = $('<h3>Paga a tus amigos</h3><span>Paga a quien quieras desde donde quieras, sin usar efectivo</span>');
  const slider2 = $('<div id="slider2" class="item"><img src="img/icons/happy-person.png" alt="slider2"></div>');
  const texto2 = $('<h3>Sin número de cuenta</h3><span>Elige a quién pagar desde tu lista de contactos</span>');
  const slider3 = $('<div id="slider3" class="item"><img src="img/icons/group-people.png" alt="slider3"></div>');
  const texto3 = $('<h3>Gratis y seguro</h3><span>La transferencia es inmediata y gratuita de una cuenta a otra</span>');

  $('#slider').append(sliderIntro);
  $('#slider-img').append(slider1);
  $('#slider-img').append(slider2);
  $('#slider-img').append(slider3);
  $('#slider1').append(texto1);
  $('#slider2').append(texto2);
  $('#slider3').append(texto3);
});

$('.owl-nome').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
      ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
