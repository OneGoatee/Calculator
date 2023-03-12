const displayText = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operand = '';

// Variable Flags
let isEquationReady = false;
let isNumberButton;
let isAcButton;
let isPlusMinusButton;
let isPercentButton;
let isDivisionButton;
let isMultiplicationButton;
let isSubtractionButton;
let isAdditionButton;
let isEqualButton;
let isDecimalButton;
let isFirstNumber;
let isSecondNumber;

logEquationParts(); // Delete this eventually

// Add event listeners to all buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    updateFlags(button);
    updateDisplay(button);
    isEquationReady = updateEquationVariables(button);
  });
});

// 1. Create a function to update the display when a number is pressed
function updateDisplay(button) {
  switch (true) {
    case isNumberButton && operand === '' && displayText.innerText === '0':
      displayText.innerText = '';
      displayText.innerText += button.innerText;
      break;

    case isNumberButton && operand !== '' && firstNumber !== 0:
      displayText.innerText = '';
      displayText.innerText += button.innerText;
      break;

    case isNumberButton && operand !== '' && secondNumber === 0:
      // displayText.innerText = '';
      displayText.innerText += button.innerText;
      break;

    case isNumberButton & (displayText.innerText !== '0'):
      displayText.innerText += button.innerText;
      break;

    case isAcButton:
      allClear();
      break;

    case isPlusMinusButton:
      break;

    case isPercentButton:
      break;

    case isDivisionButton:
      break;

    case isMultiplicationButton:
      break;

    case isSubtractionButton:
      break;

    case isAdditionButton:
      if (isEquationReady) {
        calculateEquation();
      }

      break;

    case isEqualButton && isEquationReady:
      calculateEquation();
      break;

    case isDecimalButton:
      displayText.innerText += button.innerText;
      break;

    default:
      break;
  }
}

// Create a function that update the variable flags
function updateFlags(button) {
  isNumberButton = button.classList.contains('number');
  isAcButton = button.classList.contains('ac');
  isPlusMinusButton = button.classList.contains('plus-minus');
  isPercentButton = button.classList.contains('percent');
  isDivisionButton = button.classList.contains('division');
  isMultiplicationButton = button.classList.contains('multiplication');
  isSubtractionButton = button.classList.contains('subtraction');
  isAdditionButton = button.classList.contains('addition');
  isEqualButton = button.classList.contains('equal');
  isDecimalButton = button.classList.contains('decimal');
  isFirstNumber = firstNumber !== 0;
  isSecondNumber = secondNumber !== 0;
}

// Create a function that pushes values to the equation parts
function updateEquationVariables(button) {
  switch (true) {
    case !button.classList.contains('number') && operand === '' && result === 0:
      firstNumber = Number(displayText.innerText);
      operand = !button.classList.contains('ac') ? button.classList[0] : '';
      logEquationParts(); // Delete this eventually
      return firstNumber !== 0 && secondNumber !== 0 && operand !== '';

    case operand !== '' && result === 0:
      secondNumber = Number(displayText.innerText);
      logEquationParts(); // Delete this eventually

      return firstNumber !== 0 && secondNumber !== 0 && operand !== '';

    default:
      break;
  }
}

// Create a function to calculate the current equation
function calculateEquation() {
  switch (operand) {
    case 'addition':
      result = firstNumber + secondNumber;
      displayText.innerText = result;
      secondNumber = 0;
      logEquationParts();
      break;

    default:
      break;
  }
}

// Create a function to add numbers if + or = is pressed
function addition() {
  result = firstNumber + secondNumber;
}

// Create a function to subs-tract numbers if - or = is pressed

// Create a function to multiply numbers if x or = is pressed

// Create a function to divide numbers if ÷ or = is pressed

// Create a function to clear all
function allClear() {
  displayText.innerText = '0';
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  operand = '';
}

function logEquationParts() {
  console.log(`The value of the equation parts ARE.
First number is: ${firstNumber}
Second number is: ${secondNumber}
Result is: ${result}
Operand is: ${operand}
Is equation ready?: ${isEquationReady}`);
}
