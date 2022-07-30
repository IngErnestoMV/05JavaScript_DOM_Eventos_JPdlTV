// querySelector
const heading = document.querySelector('.header__texto h2')// Retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading'; // Coambia el texto
heading.classList.add('nueva-clase'); // Agrega una clase
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // Retorna de 0 a todos los elementos
console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para Enlace';
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('navegacion__enlace');

// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);