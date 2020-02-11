const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

const add = (a ,b) => a + b;
const subtract = (a, b) => a - b; 
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === add) {
        let answer = add(a, b);
        return answer;
    } else if (operator === subtract) {
        let answer = subtract(a, b);
        return answer;
    } else if (operator === multiply) {
        let answer = multiply(a, b);
        return answer;
    } else if (operator === divide) {
        let answer = divide(a, b);
        return answer;
    } 
} 
// clicked button gets put into display
let displayValue = [];
const updateDisplay = function(number) {
    displayValue = displayValue + number;
};

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        updateDisplay(e.target.textContent);
        display.textContent = displayValue;
    });
});

// clears display when C button clicked
clear.addEventListener('click', () => {
    displayValue = [];
    display.textContent = displayValue;
})

// removes last number when backspace is clicked
backspace.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
})
