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
    } else if (operator == "x"){
        multiply(number1,number2);
    } else if (operator == "/"){
        multiply(number1,number2);
    };
}

function inputSetup(){
    let numberButtons = document.querySelectorAll(`.numbers > button`);
    let operatorButtons = document.querySelectorAll(`.operators > button`);
    let clearButton = document.querySelector(`.clear`);
    let equalsButton = document.querySelector(`.equals`);
    let display = document.querySelector(`.display`);

    numberButtons.forEach(button => {
        button.addEventListener('click',() =>{
            
            console.log(button.textContent);
            display.textContent = display.textContent + button.textContent;
        })
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click',() =>{
            if (display.textContent == ""){
                return;
            }
            console.log(button.textContent);
            display.textContent = display.textContent + button.textContent;
        })
    });

    clearButton.addEventListener('click',() =>{
        display.textContent = "";
    });
}

console.log("======[SCRIPTS ATTACHED]======");

inputSetup();


