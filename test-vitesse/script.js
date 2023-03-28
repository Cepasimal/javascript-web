let words = [];
let boardDiv = null;
let input = null;
let timerPanel = null;
let timer = null;
let secondes = 0;
let beginToType = false;

/**
 * Show win message
 */
const win = () => {
  const winDiv = document.getElementById("win");
  winDiv.innerHTML = `<img class="win-img" src="https://media1.giphy.com/media/QJsP0cTAJhg7O47ub2/giphy.gif">
  <div class="win-text">Vous avez gagné !</div>`
}

/**
 * Update word board
 */
const updateBoard = () => {
  boardDiv.innerHTML = "";
  words.forEach((word, index) => {
    if (index === 0) {
      boardDiv.innerHTML += `<div class="next-word">${word}</div>`;
    }
    else {
      boardDiv.innerHTML += `<div>${word}</div>`;
    }
  });
}

/**
 * Verify if word have been correctly wrotten
 * @param {*} event 
 */
const userTyping = (event) => {
  if (!beginToType) {
    beginToType = true;
    startTimer();
  }

  const word = event.target.value;

  if (word === words[0]) {
    words.shift();
    updateBoard();
    input.value = "";

    if (words.length === 0) {
      win();
      stopTimer();
    }
  }
}

/**
 * Increase seconds
 */
const everySecond = () => {
  secondes++;
  timerPanel.innerHTML = `${secondes}s`
}

/**
 * Start timer
 */
const startTimer = () => {
  timer = setInterval(everySecond, 1000);
}

/**
 * Stop timer
 */
const stopTimer = () => {
  clearInterval(timer);
  timer = null;
}

/**
 * Reset
 */
const reset = () => {
  stopTimer();
  words = ['quand', 'je', 'pense', 'à', 'toi', 'je', 'suis', 'patate'];
  const winDiv = document.getElementById("win");
  winDiv.innerHTML = "";
  timerPanel.innerHTML = "";
  updateBoard();
}

/**
 * When page is loaded, update html and listen to event
 */
const onLoad = () => {
  boardDiv = document.getElementById('board');
  input = document.getElementById('input');

  input.addEventListener('input', userTyping);
  
  // Timer
  let resetButton = document.getElementById('reset');
  timerPanel = document.getElementById('timer');

  resetButton.addEventListener('click', reset);
  
  reset();
  updateBoard();
}

window.addEventListener("load", onLoad)