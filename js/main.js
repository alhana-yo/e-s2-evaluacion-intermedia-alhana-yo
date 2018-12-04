'use strict';


//generamos el número aleatorio hasta 100

//const max = 100;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


console.log('> ' + getRandomNumber(100));






// let face = document.querySelector('.face');
// let head = document.querySelector('.head');

// function laugh(e) {
//     face.innerHTML =';)';

//     // Add 100 buttons

//     for (i=0; i=99; i++){

//         document.innerHTML='<button>Hello`i`</button>';
//         console.log(i);

//     }

// }

// function initialPosition(e){
//     face.innerHTML =':)';
//     console.log(face);
// }

// face.addEventListener('click', laugh );
// head.addEventListener('mouseout', initialPosition);
