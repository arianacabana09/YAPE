$(_ =>{
  const section = $('<section id="slider"></section>');
  const sliderIntro = $('<div class="slider-img"></div>');
  const slider1 = $('<div id="slider1" class="owl-nome owl-carousel"><img src="img/icons/icon-people.png" alt="slider1" class="item"></div>');
  const h1 = $('<h1>Paga a tus amigos<h1><span>Paga a quien quieras desde donde quieras, sin usar efectivo</span>');
// img\icons\happy-person.png
// img\icons\group-people.png
  $('body').append(section);
  $('#slider').append(sliderIntro);
  $('.slider-img').append(slider1);
  $('#slider1').append(h1);
});
