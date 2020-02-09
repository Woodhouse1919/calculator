const display = document.querySelector('.display');


function add(a ,b) {
    let answer =  a + b;
    display.textContent = answer;
};

function subtract(a, b) {
    let answer = a - b;
    display.textContent = answer;
};

function multiply(a, b) {
    let answer = a * b;
    display.textContent = answer;
};

function divide(a, b) {
    let answer = a / b;
    display.textContent = answer;
};

function operate(operator, a, b) {
    if (operator === add && typeof a === 'number' && typeof b === 'number') {
        add(a, b);
    } else if (operator === subtract && typeof a === 'number' && typeof b === 'number') {
        subtract(a, b);
    } else if (operator === multiply && typeof a === 'number' && typeof b === 'number') {
        multiply(a, b);
    } else if (operator === divide && typeof a === 'number' && typeof b === 'number') {
        divide(a, b);
    } 
} 
