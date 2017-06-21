'use strict';
const Screen1 = (update) =>{
  const sliderIntro = $('<div id="slider-img" class="carousel carousel-slider" data-indicators="true"></div>');
  const slider1 = $('<div id="slider1" class="carousel-item"><img src="img/icons/icon-people.png" alt="slider1"></div>');
  const texto1 = $('<h3>Paga a tus amigos</h3><span>Paga a quien quieras desde donde quieras, sin usar efectivo</span>');
  const slider2 = $('<div id="slider2" class="carousel-item"><img src="img/icons/happy-person.png" alt="slider2"></div>');
  const texto2 = $('<h3>Sin número de cuenta</h3><span>Elige a quién pagar desde tu lista de contactos</span>');
  const slider3 = $('<div id="slider3" class="carousel-item"><img src="img/icons/group-people.png" alt="slider3"></div>');
  const texto3 = $('<h3>Gratis y seguro</h3><span>La transferencia es inmediata y gratuita de una cuenta a otra</span>');

  const btn = $('<button class="btn">REGISTRARME</button>');

  $('#root').append(sliderIntro);
  $('#root').append(btn);

  sliderIntro.append(slider1);
  sliderIntro.append(slider2);
  sliderIntro.append(slider3);

  slider1.append(texto1);
  slider2.append(texto2);
  slider3.append(texto3);


  btn.on('click',(e)=>{
    e.preventDefault();
    state.screen1 = null;
    state.screen2 = true;
    update();
  });

  return sliderIntro;
}
