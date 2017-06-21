'use strict';
const Screen1 = (update) =>{
  const sliderIntro = $('<div id="sliderIntro" class="carousel carousel-slider center" data-indicators="true"></div>');
  const slider1 = $('<div id="slider1" class="carousel-item center"><img src="img/icons/icon-people.png" alt="slider1"></div>');
  const texto1 = $('<span class="black-text">Paga a tus amigos</span><p>Paga a quien quieras desde donde quieras, sin usar efectivo</p>');
  const slider2 = $('<div id="slider2" class="col s12 carousel-item center"><img src="img/icons/happy-person.png" alt="slider2"></div>');
  const texto2 = $('<span>Sin número de cuenta</h3><span>Elige a quién pagar desde tu lista de contactos</p>');
  const slider3 = $('<div id="slider3" class="col s12 carousel-item center"><img src="img/icons/group-people.png" alt="slider3"></div>');
  const texto3 = $('<span>Gratis y seguro</span><p>La transferencia es inmediata y gratuita de una cuenta a otra</p>');
  const btn = $('<div class="carousel-fixed-item center"><button class="btn waves-effect waves-light" type="submit" name="action">REGISTRARME</i></button></div>');

  $('#root').append(sliderIntro);
  $('#root').append(btn);
  slider1.append(texto1);
  slider2.append(texto2);
  slider3.append(texto3);

  sliderIntro.append(slider1);
  sliderIntro.append(slider2);
  sliderIntro.append(slider3);

  btn.on('click',(e)=>{
    e.preventDefault();
    state.screen1 = null;
    state.screen2 = true;
    update();
  });

  return sliderIntro;
}
