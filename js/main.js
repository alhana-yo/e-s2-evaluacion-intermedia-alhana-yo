'use strict';


//generation of a random number from 0 to 100

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let randomNumber = getRandomNumber(100);
console.log('> ' + randomNumber);

const button = document.querySelector('.button');
const usersNumber = document.querySelector('#number');
const clueText = document.querySelector('.clue__text');


// console.log('button' + button);

// console.log('usersNumber' + usersNumber);

let content;

function showContent(e) {

    console.log('estoy en la función');

    content = usersNumber.value;
    console.log(content); //showing the user's number

    //Comparing the user's number and the random number

    if (parseInt(content) === randomNumber) { //the numbers are equals
        console.log('has acertado el número!!!');

        clueText.innerHTML = 'has acertado el número!!!';
        
    } else if(content > randomNumber){

        console.log('demasiado alto');
        clueText.innerHTML = 'Demasiado alto';

    } else if (content < randomNumber) {

        console.log('demasiado bajo');
        clueText.innerHTML = 'Demasiado bajo';

    }

}

//Adding a listener that is working when someone click the button

//button.addEventListener('mouseout', showContent);

button.addEventListener('click', showContent );

