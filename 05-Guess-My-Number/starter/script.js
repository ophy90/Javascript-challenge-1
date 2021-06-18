'use strict';
/*
// Selectionner une classe dans JS -> comme je le ferais dans css
console.log(document.querySelector('.message').textContent);
/!*
console.log(document.querySelector('#message'))*!/
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

function changeSecretNumber() {
    function resetScore() {
        _score = 20;
        _highScore = 0;
    }

    let _secretNumber = 0;
    let _score = 20;
    let _highScore = 0;
}
_secretNumber = Math.trunc(Math.random()*20)+ 1;

function initializeGame() {
    resetScore();
    changeSecretNumber();

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = _score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.again').addEventListener('click', function () {
    initializeGame();
});

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

function userHasWon() {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').textContent = _secretNumber;
    if (_score > _highScore) {
        _highScore = _score;
        document.querySelector('.highscore').textContent = _highScore;
    }
}

function userHasLost(badResponse) {
    document.querySelector('.message').textContent = badResponse > _secretNumber ?  'Too high!': 'Too low!';
    _score = _score - 1;
    document.querySelector('.score').textContent = _score;
}

function evaluateResponse() {
    const userInput = Number(document.querySelector('.guess').value);
    const hasUserWon = userInput === _secretNumber;
    if (hasUserWon) {
        userHasWon();

    } else  {
        userHasLost(userInput);
    }
}

document.querySelector('.check').addEventListener('click', function () {
    const isInputSet = document.querySelector('.guess').value !== ""

    if (!isInputSet) {
        document.querySelector('.message').textContent = 'No number';
        return;
    }

    evaluateResponse();

    //
    // document.querySelector('.message').textContent = 'You lost the game!';
    // document.querySelector('.score').textContent = 0;
});



/*document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random()*20)+ 1;
    score = 20;

    document.querySelector('.message').textContent = 'Start guessing ...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';

});*/



/*Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
    Your tasks:
    1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀*/
