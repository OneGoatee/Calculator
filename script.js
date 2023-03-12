const displayText = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let = numbersToDisplay = '';

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
      console.log(`Its a number`);
      break;

    case button.classList.contains('ac'):
      allClear();
      console.log(`Its All Clear`);
      break;

    case button.classList.contains('plus-minus'):
      console.log(`Its Plus Minus`);
      break;

    case button.classList.contains('percent'):
      console.log(`Its Percent`);
      break;

    case button.classList.contains('division'):
      console.log(`Its Division`);
      break;

    case button.classList.contains('multiplication'):
      console.log(`Its Multiplication`);
      break;

    case button.classList.contains('subtraction'):
      console.log(`Its Subtraction`);
      break;

    case button.classList.contains('addition'):
      console.log(`Its Addition`);
      break;

    case button.classList.contains('equal'):
      console.log(`Its Equal`);
      break;

    case button.classList.contains('decimal'):
      console.log(`Its Decimal`);
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
}
