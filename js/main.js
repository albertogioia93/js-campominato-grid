'use strict';

function creareCella(element, className, htmlValore){
   const cellaCreata = document.createElement(element);
   cellaCreata.classList.add(className);
   cellaCreata.innerText = htmlValore;

   cellaCreata.addEventListener('click', function() {
       alert(htmlValore);
   });

   return cellaCreata;
}

function elementoAppeso(containerElement, htmlElement){
    containerElement.append(htmlElement);
}


const contenitore = document.querySelector('.container');

for(let i = 1; i <= 100; i++){
    const elementoCreato = creareCella('div', 'cella', i);
    elementoAppeso(contenitore, elementoCreato);
}



// const bottoneClick = document.querySelector('button');

// bottoneClick.addEventListener('click', function() {
//     alert('bottone cliccato');
// });