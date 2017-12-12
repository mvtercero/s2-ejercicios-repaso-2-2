"use strict";

// 1. Repítelo 100 veces
//
// ¡Es hora de actuar! En la pizarra (nuestra página web) tenemos que escribir 100 veces la frase "He aprendido bien cómo funcionan los bucles". Cada frase en una línea diferente. ¿Podremos conseguirlo? Primero dale a la web aspecto de pizarra: el fondo de negro, las letras en blanco, tipografía que simula el pintado con tiza tipo chalkboard, etc. Y luego, ¡a escribir!

var selectColor= document.querySelector('.color');
var menuColors= ['blanco', 'azul','rojo', 'verde', 'amarillo','rosa'];
var combo= '';

for (var i = 0; i < menuColors.length; i++) {
  var value
  combo= combo + '<option value='+menuColors[i]'>' + menuColors [i] + '</option>';

}

var superCombo= '<select>'+ combo +'</select>';

var punishment= document.querySelector('.body');
var text= "";
var times= 100;

for (var i = 0; i <= times; i++) {
  text= text + '<p>' + "He aprendido bien cómo funcionan los bucles" + '</p>' +superCombo;
}

punishment.innerHTML= text;


// 2. Un combo por frase
//
// ¡Seguimos con nuestra pizarra! Ahora vamos a añadir un combo (elemento select de HTML) al final de cada línea de texto. En el combo podremos seleccionar un color de los siguientes: blanco, azul, rojo, verde, amarillo, rosa. Por defecto, el combo tendrá seleccionado el color blanco que es el color del texto de los párrafos.

var selectColor= document.querySelector('.color');
var menuColors= ['blanco', 'azul','rojo', 'verde', 'amarillo','rosa'];
var combo= '';

for (var i = 0; i < menuColors.length; i++) {
  combo= combo + '<option>' + menuColors [i] + '</option>';
}

var superCombo= '<select>'+ combo +'</select>';

// selectColor.innerHTML= combo;

//Queremos que el combo (select) se coloque debajo de cada línea.

var allLines= document.querySelectorAll('.prueba');

for (var i = 0; i < allLines.length; i++) {
  var aLine= allLines[i].querySelector(".prueba");
  // aLine.innerHTML+= combo;
}



// 3. Vamos a darle color
//
// Ahora viene lo bueno: vamos a añadir el comportamiento a la web para que al modificar un combo se cambie el color del texto de esa línea al color indicado en el combo. Por ejemplo, si modificamos el color del combo de la línea 3 a rosa, el texto de la línea 3 se convierte en rosa.
// Algunas pistas para esta tercera parte:
// primero haced funcionar un combo para una única línea
// investigad cómo funciona el evento change de los elementos tipo select (documetación de MDN)
// desde el objeto event de la función de callback, podemos acceder al select que ha provocado el evento mediante event.currentTarget; incluso al índice (como en un array) de la opción seleccionada con event.currentTarget.selectedIndex

// var positionArray= menuColors.indexOf()
//
// menuColors.indexOf(input.value)
//
// alert (menuColors[3]);
//
//
//
//
// var changeColor= document.querySelector('.color');
// changeColor.addEventListener('change',showColor);
//
// function showColor(event){
//   var select= event.currentTarget;
//   var input= select.options[select.selectedIndex];
//   menuColors.indexOf(input.value);
//   document.querySelector('.prueba').style.color= "#8328f7"
//   }


  // alert ('Me gusta el ' + input.value);

//   if(input.value === select.options[1]){
//     document.querySelector('.prueba').style.color= "#8328f7";
//   }
//
// }

// <script>
// function myFunction() {
//     var x = document.getElementById("mySelect").selectedIndex;--->el color
//     var y = document.getElementById("mySelect").options;---->posición
//     alert("Index: " + y[x].index + " is " + y[x].text);
// }
// </script>

// var fruits = ['pera', 'manzana', 'naranja', 'plátano'];
// alert(fruits); // Muestra el array completo: 'pera', 'manzana', 'naranja', 'plátano'
// alert(fruits[1]); // Muestra 'manzana' (recordemos que el primer índice es 0)
// alert(fruits[3]); // Muestra 'plátano'

//
// document.getElementById("iddelenlace").style.color = "#B23803"

// var fruits = document.querySelectorAll('.fruits li');
// for (var i = 0; i < fruits.length; i++) {
//   fruits[i].addEventListener('click', showAlertWithFruit);
// }
//
// function showAlertWithFruit(event){
//   alert(event.currentTarget.innerHTML);
// }
