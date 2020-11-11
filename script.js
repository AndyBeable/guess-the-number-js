'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🥳 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;

document.querySelector('.guess').value = 23; // sets the value in the input field
console.log(document.querySelector('.guess').value); // gets a value from an input
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // secret number
let score = 20; // setting default score
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; // using a function instead of repeating the same code throughout (see line 29 for it being called. )
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // converts string to a number value
  console.log(guess, typeof guess);

  // When there is no input (guess)
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!'; // defensive check, if no value is given
    displayMessage('⛔️ No Number!');

    // when player guesses correct
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🥳 Correct Number!'; // what happens if correct number is guessed
    displayMessage('🥳 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high ⬆️' : 'Too low ⬇️'; // what happens if guess is high
      displayMessage(guess > secretNumber ? 'Too high ⬆️' : 'Too low ⬇️');
      score--; // subtracts 1 from score (counts as a guess)
      document.querySelector('.score').textContent = score; // updates score with new remaining guesses
    } else {
      // document.querySelector('.message').textContent = 'You lost the game 😔';
      displayMessage('You lost the game😔');
      document.querySelector('.score').textContent = 0;
    }
    // } else if (guess > secretNumber) {
    //   // when guess is too low
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too low ⬇️'; // what happens if guess is high
    //     score--; // subtracts 1 from score (counts as a guess)
    //     document.querySelector('.score').textContent = score; // updates score with new remaining guesses
    //   } else {
    //     document.querySelector('.message').textContent = 'You lost the game 😔';
    //     document.querySelector('.score').textContent = 0;
    //   }
  }
});

// Restores all elements when clicking Again.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guesssing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
