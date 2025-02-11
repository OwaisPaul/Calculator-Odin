const display = document.getElementById('display');

let num1;
let num2;
let operator;

function clearDisplay() {
    display.value = '';
}

function onDisplay(num1,operator,num2){
    display.value = num1,operator,num2;
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function operate(num1,operator,num2){
    switch(operator){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '*':
            return multiply(num1,num2);
            break;
        case '/': 
            return divide(num1,num2);
            break;
        default:
            return 'Error';

    }


}