const display = document.getElementById('display');


let num1 = '';
let num2 = '';
let operation = null;
let resetDisplay = false;


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
    if(b === 0){
        return "Error";
    }
    return a / b;
}

function operate(num1,operation,num2){
    switch(operation){
        case '+':
            return add(num1,num2);
           case '-':
            return subtract(num1,num2);
           case '*':
            return multiply(num1,num2);
           case '/': 
            return divide(num1,num2);
           default:
            return 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    num1 = '';
    num2 = '';
    operation = null;
    resetDisplay = false;
}

function onDisplay(input){
    if(resetDisplay){
    display.value = '';
    resetDisplay = false;
    }
    display.value += input;
}

function onNumber(number){
    if(operation === null){
        num1 += number;
    } else {
        num2 += number;
    }
    onDisplay(number);
}

function onOperator(operator){
    if(num1 === '') return;
    if(num2 !== '') {
        calculate();
    }
    operation = operator;
    resetDisplay = true;
}

function calculate(){
    if(num1 === '' || num2 === '' || operation === null) return;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    let result = operate(number1, operation, number2);
    display.value = result;

    num1 = result.toString();
    num2 = '';
    operation = null;
    resetDisplay = true;
}