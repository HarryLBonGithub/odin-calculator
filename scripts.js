let number1 = 0;
let number2 = 0;
let operator = "";

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1,number2){
    return number1-number2;
}

function multiply(number1,number2){
    return number1 * number2;
}

function divide(number1,number2){
    return number1/number2;
}

function operate(number1,number2,operator){
    if (operator == "+"){
        add(number1,number2);
    } else if (operator == "-"){
        subtract(number1,number2);
    } else if (operator == "*"){
        multiply(number1,number2);
    } else if (operator == "/"){
        multiply(number1,number2);
    };
}

console.log("======[SCRIPTS ATTACHED]======");