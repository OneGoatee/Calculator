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
  if (displayText.innerText === '0') {
    displayText.innerText = '';
  }

  if (button.classList.contains('number')) {
    displayText.innerText += button.innerText;
  }
}

// 2. Create a function to add numbers if + or = is pressed

// 3. Create a function to subs-tract numbers if - or = is pressed

// 4. Create a function to multiply numbers if x or = is pressed

// 5. Create a function to divide numbers if ÷ or = is pressed

// 6. Create a function to clear all
