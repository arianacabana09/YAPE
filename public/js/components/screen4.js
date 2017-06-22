const Screen4 = (update) =>{
  const container = $('<div class="center-align"></div>');

  const div = $('<div class="row"></div>');
  const img = $('<img class="img-intro" src="img/icons/lockone.png">');
  const text = $('<h5><strong>Crea tu usuario YAPE</strong></h5><p>Ingresa un nombre, email y clave de usuario.</p>');

  const divForm = $('<div class="row"></div>');
  const form = $('<form class="col s12><div class="row"></div></form>');
  const divName = $('<div class="input-field col s12"></div>');
  const inputName = $('<input placeholder="Nombre" id="name" type="text" class="validate">');
  const divEmail = $('<div class="input-field col s12"></div>');
  const inputEmail = $('<input placeholder="correo@ejemplo.com" id="email" type="email" class="validate">');
  const divPsw = $('<div class="input-field col s12"></div>');
  const inputPsw = $('<input placeholder="Ingresa clave de 6 dígitos" id="password" type="password" class="validate">');
  const spanPsw = $('<span>Cuida esta clave como oro, es tu acceso a Yape.</span>');

  const btn = $('<button class="btn waves-effect waves-light" type="submit" name="action">CREAR CUENTA</button>');

  // principal

  $('#root').append(container);

  // Inicio
  container.append(div);
  div.append(img);
  div.append(text);

  // form
  container.append(divForm);
  divForm.append(form);
  form.append(divName);
  form.append(divEmail);
  form.append(divPsw);
  form.append(btn);

  divName.append(inputName);
  divEmail.append(inputEmail);
  divPsw.append(inputPsw);
  divPsw.append(spanPsw);

  // update();
  return container;
}
