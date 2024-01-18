// const random = (Math.random() * 100 + 1).toFixed(0);
//or 

let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validate(guess)
    })
}

function validate(guess) {
    // Numbers should be greater than 1 and lower than equal to 100
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    } else if (guess<1) {
        alert('Please enter a number more than 1')
    }else if (guess>100) {
        alert('Please enter a number less than 100')
    }else{
        preGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over Random NO. was : ${random}`,)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)

        }
    }
}

function checkGuess(guess) {
    // check if the guess if lower or higher than the number.
    if (guess === random) {
        displayMessage(`You guessed it right`)
        endGame()
    }else if (guess < random){
        displayMessage(`Number is Tooo low`)
    }else if (guess > random){
        displayMessage(`Number is Tooo High`)
    }
}

function displayGuess(guess) {
    userInput.value = ' '
    guesses.innerHTML += `${guess}  ` // Its not replacing or updating its appending.
    numGuess++;
    lastResult.innerHTML = `${11-numGuess}  `
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ' '
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h1 id = "newGame">Start new Game</h2>`;
    resultParas.appendChild(p)
    playGame = false
    newGame()
}


function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function (e) {
        let random = parseInt(Math.random() * 100 + 1);
        preGuess = []
        numGuess = 1
        guesses.innerHTML = ''
        lastResult.innerHTML = `${11-numGuess}  `
        userInput.removeAttribute('disabled')
        resultParas.removeChild(p)
        playGame = true
    })
}

