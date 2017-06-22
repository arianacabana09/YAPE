const Screen5 = (update) =>{
   const div = $('<div class="bg-yellow center-align"></div>');

   const img = $('<img src="img/icons/check.png">');
   const text = $('<h5><strong>¡Bien!</h5><p>Ahora puedes usar Yape</p></strong>');

 $('#root').append(div);
 div.append(img);
 div.append(text);

 return div;
 }
