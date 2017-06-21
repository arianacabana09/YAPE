'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  // wrapper.append(Screen1());
  if (state.screen1 == null) {
    console.log("hola screen1");
    wrapper.append(Screen1(_ => render(root)));
  } else{
    console.log("hola screen2");
    wrapper.append(Screen2(_ => render(root)));
  }
  root.append(wrapper);
}


const state = {
  screen2 : null
  // registro : null,
  // telefono :null,
  // code: null
};

$(_ =>{
  const root = $('#root');
  render(root);
  $('.carousel.carousel-slider').carousel({fullWidth: true});
});
