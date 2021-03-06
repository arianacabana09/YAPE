'use strict';

const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  // wrapper.append(Screen1());
  if (state.screen1 == null) {
    console.log("hola screen1");
    wrapper.append(Screen1(_ => render(root)));
  } else if (state.screen2 != null) {
    console.log("hola screen2");
    wrapper.append(Screen2(_ => render(root)));
  } else if (state.screen3 != null) {
    console.log("hola screen3");
    wrapper.append(Screen3(_ => render(root)));
  } else if (state.screen4 != null) {
    console.log("hola screen4");
    wrapper.append(Screen4(_ => render(root)));
  } else if (state.screen5 != null) {
    console.log("hola screen5");
    wrapper.append(Screen5(_ => render(root)));
  }

  root.append(wrapper);
}

const state = {
  screen1 : null,
  screen2 : null,
  screen3 : null,
  screen4 : null,
  screen5 : null
};

$(_ =>{
  const root = $('#root');
  render(root);
  $('.carousel.carousel-slider').carousel({fullWidth: true});
});
