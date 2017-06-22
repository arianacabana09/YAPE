const Screen3 = (update) =>{
  const container = $('<div class="container center-align"></div>')

  const div = $('<div class="row"></div>');
  const img = $('<img class="img-intro" src="img/icons/message.png">');
  const text = $('<h5><strong>Ahora ingresa tu código</strong></h5><p>Enviamos un SMS con el código de validación al número</p>+"phone"');

  const divForm =$('<div class="row"></div>');
  const form = $('<form class="input-field col s12"></form>');
  const input=$('<input id="code" type="tel" maxlength="5" class="validate" placeholder=" - - - - - ">');
  const label = $('<span>Reintentar en <img src="img/icons/clock.png"></span>')

  $('#root').append(container);

  // componentes de intro
  container.append(div);
  div.append(img);
  div.append(text);

  // Componentes de input

  container.append(divForm);
  divForm.append(form);
  form.append(input);
  form.append(label);
  console.log('codigo: 12345');

  input.on('keyup', (e) => {
    // if(input.val() == state.code){
    if(input.val() === "12345"){
      e.preventDefault();
      state.screen3 = null;
      state.screen4 = true;
      update();
    }
  });
  return container;
}
