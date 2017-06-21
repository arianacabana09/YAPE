const Screen3 = (_=>{
  const container = $('<div class="container"></div>')

  const div = $('<div class="row"></div>');
  const img = $('<img src="img/icons/message.png">');
  const text = $('<h5><strong>Ahora ingresa tu código</strong></h5><p>Enviamos un SMS con el código de validación al número</p>+"phone"');

  const divForm =$('<div class="row"></div>');
  const form = $('<form class="input-field col s12"><form>');
  const input=$('<input id="code" type="tel" maxlength="5" class="validate" placeholder=" - - - - - ">');
  const label = $('<label>Reintentar en <img src="img/icons/clock.png"></label>')

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

  return container;
});
