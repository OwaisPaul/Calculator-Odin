
let num1;
let operator;
let num2;

function operate(num1,operator,num2){
   
      if (operator === '+') {
        return add(num1,num2);
    } else if(operator === '-'){
        return subtract(num1,num2);
    } else if(operator === '*'){
        return multiply(num1,num2);
    } else if(operator === '/'){
        if(num2 === 0){
            return "Cannot divide by zero";
        }
        return divide(num1,num2);
    } else {
        return "Invalid operator";
    }
}

const display = document.getElementById('display');


function clearDisplay(){
    display.value = '';
    
}

function inTheDisplay(num1,operator,num2) {
    display.value += num1,operator,num2;
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


















