const Screen2 = (update) =>{

  const container = $('<div></div>');

  const div = $('<div class="row"></div>');
  const image = $('<img src="img/icons/phone.png">');
  const text = $('<h5><strong>Para comenzar validemos tu número</strong></h5><p>Recebirás un SMS con un código de validación</p>');

  const divForm = $('<div class="row"></div>');
  const form = $('<form class="col s12"><div class="row"></div></form>');
  const divInput = $('<div class="input-field col s12"></div>');
  const input = $('<input id="icon_telephone" type="number" pattern="^[9]\d{8}$" class="validate">');
  const btn = $('<button class="btn waves-effect waves-light" type="submit">CONTINUAR</button>');

  // div principal
  $('#root').append(container);

  // componentes de la imagen
  container.append(div);
  div.append(image);
  div.append(text);

  // componentes del formulario
  container.append(divForm);
  divForm.append(form);
  form.append(divInput);
  divInput.append(input);
  divInput.append(btn);

  return container;
}
