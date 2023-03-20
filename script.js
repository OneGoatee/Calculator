const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

// Main Variables
let displayText = '';
let firstNumber = '';
let secondNumber = '';
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
let isClearBtn = false;
let isDivisionBtn = false;
let isMultiplicationBtn = false;
let isSubtractionBtn = false;
let isAdditionBtn = false;
let isFirstNumber = false;
let isSecondNumber = false;
let isDisplayZero = false;
let operatorCountZero = false;
let operatorCountOne = false;
let clearDisplayForSecondNumber = false;
let includesDecimal = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    updateFlags(button);
    updateDisplay(button);
    updateOperatorButtons(button);

    display.innerText = display.innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (display.innerText.length > 10) {
      display.classList.add('small-font');
    } else {
      display.classList.remove('small-font');
    }
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
  if (secondNumber === 0) {
    result = `Error`;
  } else {
    result = firstNumber / secondNumber;
  }
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

function allClear() {
  displayText = '';
  display.innerText = 0;
  firstNumber = 0;
  secondNumber = 0;
  result = 0;
  operator = '';
  operatorCount = 0;
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

function updateFlags(button) {
  isNumberBtn = button.classList.contains('number-btn');
  isNumberZeroBtn = button.classList.contains('zero');
  isDecimalBtn = button.classList.contains('decimal-btn');
  isOperatorBtn = button.classList.contains('operator-btn');
  isEqualBtn = button.classList.contains('equal-btn');
  isPlusMinusBtn = button.classList.contains('plus-minus-btn');
  isPercentBtn = button.classList.contains('percent-btn');
  isClearBtn = button.classList.contains('clear-btn');
  isDivisionBtn = button.classList.contains('division');
  isMultiplicationBtn = button.classList.contains('multiplication');
  isSubtractionBtn = button.classList.contains('subtraction');
  isAdditionBtn = button.classList.contains('addition');
  isFirstNumber = firstNumber !== '';
  isSecondNumber = secondNumber !== '';
  isDisplayZero = display.innerText === '0';
  operatorCountZero = operatorCount === 0;
  operatorCountOne = operatorCount === 1;
  includesDecimal = display.innerText.includes('.');
}

function updateDisplay(button) {
  switch (true) {
    case (numberLength(firstNumber) === 9 && isNumberBtn && operatorCountZero) ||
      (numberLength(secondNumber) === 9 && isNumberBtn && operatorCountOne) ||
      (isNumberZeroBtn && isDisplayZero && operatorCountZero) ||
      (isNumberZeroBtn && isDisplayZero && operatorCountZero && isEqualBtn) ||
      (isDecimalBtn && operatorCountZero && display.innerText.includes('.')) ||
      (isDecimalBtn && operatorCountOne && displayText === '0.'):
      break;

    case (isNumberBtn || isDecimalBtn) && operatorCountZero && result > 0:
      allClear();
      displayText += button.innerText;
      display.innerText = displayText;
      firstNumber = Number(displayText);
      break;

    case isDecimalBtn && isDisplayZero:
      displayText = 0;
      displayText += button.innerText;
      display.innerText = displayText;
      firstNumber = Number(displayText);
      break;

    case (isNumberBtn || isDecimalBtn) && operatorCountZero:
      displayText += button.innerText;
      display.innerText = displayText;
      firstNumber = Number(displayText);
      break;

    case isDecimalBtn && !secondNumber && operatorCountOne && clearDisplayForSecondNumber:
      displayText = '0';
      displayText += button.innerText;
      display.innerText = displayText;
      secondNumber = Number(displayText);
      clearDisplayForSecondNumber = !clearDisplayForSecondNumber;
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

    case isClearBtn:
      allClear();
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

function updateOperatorButtons(button) {
  switch (true) {
    case isDivisionBtn || isMultiplicationBtn || isSubtractionBtn || isAdditionBtn:
      buttons.forEach(button => button.classList.remove('active'));
      button.classList.add('active');
      break;

    case isEqualBtn || isClearBtn:
      buttons.forEach(button => button.classList.remove('active'));
      break;

    default:
      break;
  }
}

function numberLength(number) {
  return Math.ceil(Math.log10(number + 1));
}
