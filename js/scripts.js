// querySelector
const heading = document.querySelector('.header__texto h2')// Retorna 0 o 1 elemento
heading.textContent = 'Nuevo Heading'; // Coambia el texto
heading.classList.add('nueva-clase'); // Agrega una clase
console.log(heading);