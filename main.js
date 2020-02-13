const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('#equals')
const decimal = document.querySelector('#decimal');

const add = (a, b) => a + b;
const subtract = (a, b) => a - b; 
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(operator, a, b) {
    if (operator === add) {
        let answer = add(a, b);
        if (b == []) {
        } else { // this number if statement checks if answer includes decimal then shortens it to 4 places
            if (Number.isInteger(answer) === false) {
                display.textContent = answer.toFixed(4);
         } else { 
             display.textContent = answer;
        };
        }; 
    } else if (operator === subtract) {
        let answer = subtract(a, b);
        if (b == []) {
        } else {
            if (Number.isInteger(answer) === false) {
                display.textContent = answer.toFixed(4);
         } else { 
             display.textContent = answer;
        };
        }; 
    } else if (operator === multiply) {
        let answer = multiply(a, b);
        if (b == []) {
        } else {
            if (Number.isInteger(answer) === false) {
                display.textContent = answer.toFixed(4);
         } else { 
             display.textContent = answer;
        };
        }; 
    } else if (operator === divide) {
        let answer = divide(a, b);
        if (b == []) {
        } else {
           if (Number.isInteger(answer) === false) {
               display.textContent = answer.toFixed(4);
        } else {
            display.textContent = answer;
        };
        }; 
    }; 
};
        
    

// clicked button gets put into display and updates displayValue variable
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

// main calculator "brain"
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        let firstNum = displayValue;
        let operator = e.target.textContent;
        displayValue = [];
            equals.addEventListener('click', () => {
            secondNum = displayValue;
                if (operator === '+') {
                    operate(add, Number(firstNum), Number(secondNum));
                    secondNum = [];
                } else if (operator === '-') {
                    operate(subtract, Number(firstNum), Number(secondNum));
                    secondNum = [];
                } else if (operator === 'x') {
                    operate(multiply, Number(firstNum), Number(secondNum));
                    secondNum = [];
                } else if (operator === '÷') {
                    operate(divide, Number(firstNum), Number(secondNum));
                    secondNum = [];
                }
        });
    });
});     

     
            
                
            
