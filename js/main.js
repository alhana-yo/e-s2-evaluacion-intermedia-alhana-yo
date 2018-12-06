'use strict';

let randomNumber = getRandomNumber(100);
console.log('> ' + randomNumber);
const button = document.querySelector('.button');
const usersNumber = document.querySelector('#number');
const clueText = document.querySelector('.clue__text');
let content;
let attemps = document.querySelector('.attemps__number');
let counter = 0;


//generation of a random number from 0 to 100

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}



function showContent(e) {


    content = parseInt(usersNumber.value);
    
    //Comparing the user's number and the random number

    if (content === randomNumber) { //the numbers are equals
        console.log('has acertado el número!!!');

        clueText.innerHTML = 'has acertado el número!!!';
        counter++;
        
    } else if(content > randomNumber){

        console.log('demasiado alto');
        clueText.innerHTML = 'Demasiado alto';
        counter++;

    } else if (content < randomNumber) {

        console.log('demasiado bajo');
        clueText.innerHTML = 'Demasiado bajo';
        counter++;

    }

    attemps.innerHTML = counter;

}

//Adding a listener that is working when someone click the button

//button.addEventListener('mouseout', showContent);

button.addEventListener('click', showContent );

