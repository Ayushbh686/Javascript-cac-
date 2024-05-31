# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

##Alternative Solution 
```javascipt

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach( function (button) {
  button.addEventListener('click' , function(e){
    body.style.backgroundColor = e.target.id;
  }); 
});

```

## project 2 solution

```javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});


```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```

## project 4 solution


```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

## alternative Solution 
``` javascipt
const userInput = document.querySelector("#guessField");
const submit = document.querySelector('#subt');
let num = Math.floor(Math.random() * 100 + 1);
let prevGuesses = document.querySelector('.guesses');
let remGuesses = 10; // Initialize remaining guesses
const resultOutput = document.querySelector('.lowOrHi');
const guessesRemaining = document.querySelector('.lastResult');

const resetButton = document.createElement('button');
resetButton.innerHTML = 'RESTART GAME';
resetButton.style.display = 'none';
document.body.appendChild(resetButton);
resetButton.style.marginLeft = '90px';

submit.addEventListener('click', function(e) {
    e.preventDefault();
    let guess = parseInt(userInput.value); // Get the value of the guess inside the event listener
    if (!isNaN(guess)) {
        CheckGuess(guess);
    }
});

function CheckGuess(guess) {
    if (num === guess) {
        resultOutput.innerHTML = `<h3>You have guessed the correct number ${num}!</h3>`;
        EndGame();
    } else if (num > guess) {
        resultOutput.innerHTML = `<h3>Your guess is TOO low!</h3>`;
        updateValues(guess);
    } else {
        resultOutput.innerHTML = `<h3>Your guess is TOO high!</h3>`;
        updateValues(guess);
    }
}

function updateValues(guess) {
    prevGuesses.innerText += `${guess} , `;
    remGuesses -= 1;
    guessesRemaining.innerText = remGuesses;
    
    if (remGuesses === 0) {
        resultOutput.innerHTML = `<h3>Your attempts are over, the number was ${num}.</h3>`;
        EndGame();
    } else {
        userInput.value = ''; // Clear the input field for the next guess
    }
}

function EndGame() {
    submit.setAttribute('disabled', ''); // Disable the submit button
    userInput.setAttribute('disabled', ''); // Disable the input field
    resultOutput.innerHTML += `<h3>Game over! The number was ${num}.</h3>`;
    resetButton.style.display = 'block';
    resetButton.addEventListener('click' , resetGame);
}


// Function to reset the game if needed
function resetGame(e) {
    e.preventDefault();
    remGuesses = 10;
    prevGuesses.innerText = '';
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    resultOutput.innerHTML = '';
    guessesRemaining.innerText = remGuesses;
    userInput.value = '';
    resetButton.style.display = 'none';
    num = Math.floor(Math.random() * 100 + 1);
}

```


# Project 5 solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});


```

# Project 6 Solution

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```
