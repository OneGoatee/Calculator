const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// Main Variables
let displayText = '';
let firstNumber = 0;
let secondNumber = 0;
let result = 0;
let operator = '';
let operatorCount = 0;

// Variable Flags
let isNumberBtn = false;
let isNumberZeroBtn = false;
let isDecimalBtn = false;
let isOperatorBtn = false;
let isEqualBtn = false;
let isPlusMinusBtn = false;
let isPercentBtn = false;
let isFirstNumber = false;
let isSecondNumber = false;
let isDisplayZero = false;
let operatorCountZero = false;
let operatorCountOne = false;
let clearDisplayForSecondNumber = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    updateFlags(button);
    updateDisplay(button);
  });
});

function add() {
  result = firstNumber + secondNumber;
}

function subtract() {
  result = firstNumber - secondNumber;
}

function multiply() {
  result = firstNumber * secondNumber;
}

function divide() {
  result = firstNumber / secondNumber;
}

function plusMinus() {
  displayText = display.innerText * -1;
  display.innerText = displayText;
  firstNumber = Number(displayText);
}

function percent() {
  displayText = display.innerText / 100;
  display.innerText = displayText;
  firstNumber = Number(displayText);
}

function operate(operator) {
  switch (operator) {
    case 'addition':
      add();
      break;

    case 'subtraction':
      subtract();
      break;

    case 'multiplication':
      multiply();
      break;

    case 'division':
      divide();
      break;

    default:
      break;
  }

  prepareForNextOperation();
}

function clear() {
  displayText = '';
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
}

function updateFlags(button) {
  isNumberBtn = button.classList.contains('number-btn');
  isNumberZeroBtn = button.classList.contains('zero');
  isDecimalBtn = button.classList.contains('decimal-btn');
  isOperatorBtn = button.classList.contains('operator-btn');
  isEqualBtn = button.classList.contains('equal-btn');
  isPlusMinusBtn = button.classList.contains('plus-minus-btn');
  isPercentBtn = button.classList.contains('percent-btn');
  isFirstNumber = firstNumber !== 0;
  isSecondNumber = secondNumber !== 0;
  isDisplayZero = display.innerText === '0';
  operatorCountZero = operatorCount === 0;
  operatorCountOne = operatorCount === 1;
}

function updateDisplay(button) {
  switch (true) {
    case isNumberZeroBtn && isDisplayZero && operatorCountZero:
      break;

    case (isNumberBtn || isDecimalBtn) && operatorCountZero:
      displayText += button.innerText;
      display.innerText = displayText;
      firstNumber = Number(displayText);
      break;

    case (isNumberBtn || isDecimalBtn) && operatorCountOne && clearDisplayForSecondNumber:
      displayText = '';
      displayText += button.innerText;
      display.innerText = displayText;
      secondNumber = Number(displayText);
      clearDisplayForSecondNumber = !clearDisplayForSecondNumber;
      break;

    case (isNumberBtn || isDecimalBtn) && operatorCountOne && !clearDisplayForSecondNumber:
      displayText += button.innerText;
      display.innerText = displayText;
      secondNumber = Number(displayText);
      break;

    case isOperatorBtn && operatorCountZero:
      operator = button.classList[0];
      operatorCount++;
      clearDisplayForSecondNumber = !clearDisplayForSecondNumber;
      break;

    case isPlusMinusBtn && !isDisplayZero:
      plusMinus();
      break;

    case isPercentBtn && !isDisplayZero:
      percent();
      break;

    case isEqualBtn && isFirstNumber && isSecondNumber:
      operate(operator);
      break;

    default:
      break;
  }
}

function prepareForNextOperation() {
  displayText = result;
  firstNumber = result;
  secondNumber = 0;
  display.innerText = displayText;
  operator = '';
  operatorCount = 0;
}
