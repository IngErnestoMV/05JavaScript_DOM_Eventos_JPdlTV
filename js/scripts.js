/*  querySelector   */
const heading = document.querySelector('.header__texto h2')// Retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading'; // Coambia el texto
heading.classList.add('nueva-clase'); // Agrega una clase
// console.log(heading);

/*  querySelectorAll    */
const enlaces = document.querySelectorAll('.navegacion a'); // Retorna de 0 a todos los elementos
// console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
//  enlaces[0].classList.remove('navegacion__enlace');

/*  getElementById  */
const heading2 = document.getElementById('heading');
// console.log(heading2);

/*  Generar un nevo enlace   */
const nuevoEnlace = document.createElement('A'); // Se recomienda poner las etiquetas en mayusculas en JavaScript
//  Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//  Agregar el texto
nuevoEnlace.textContent = 'Un Nuevo Enlace';
//  Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregar al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

/*  Eventos */
console.log(1);

window.addEventListener('Load', function(){ // Load espera a que el JS y los archivos del HTML esten listos para ejecutarse.
    console.log(2);
});

window.onload = function(){
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ // Load espera a que el HTML se carge. Sin esperar las imagenes o el CSS
    console.log(4);
});
    
console.log(5);

window.onscroll =function() {
    console.log('scrolling...');
}