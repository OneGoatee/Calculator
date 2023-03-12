const displayText = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let = firstNumber = 0;
let = secondNumber = 0;
let = result = 0;

// 0. Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    updateDisplay(button);
  });
});

// 1. Create a function to update the display when a number is pressed
function updateDisplay(button) {
  if (displayText.innerText === '0' && button.classList.contains('number')) {
    displayText.innerText = '';
  }

  switch (true) {
    case button.classList.contains('number'):
      displayText.innerText += button.innerText;
      break;

    case button.classList.contains('ac'):
      allClear();
      break;

    case button.classList.contains('plus-minus'):
      break;

    case button.classList.contains('percent'):
      break;

    case button.classList.contains('division'):
      break;

    case button.classList.contains('multiplication'):
      break;

    case button.classList.contains('subtraction'):
      break;

    case button.classList.contains('addition'):
      break;

    case button.classList.contains('equal'):
      break;

    case button.classList.contains('decimal'):
      break;

    default:
      break;
  }
}

// 2. Create a function to add numbers if + or = is pressed

// 3. Create a function to subs-tract numbers if - or = is pressed

// 4. Create a function to multiply numbers if x or = is pressed

// 5. Create a function to divide numbers if ÷ or = is pressed

// 6. Create a function to clear all
function allClear() {
  displayText.innerText = '0';
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
}
