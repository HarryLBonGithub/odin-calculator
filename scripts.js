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
        return add(number1,number2);
    } else if (operator == "-"){
        return subtract(number1,number2);
    } else if (operator == "x"){
        return multiply(number1,number2);
    } else if (operator == "/"){
        return divide(number1,number2);
    };
}

function equationToArray(equation){
    splitEquation = equation.split(" ");
    console.log(splitEquation);
    
    return splitEquation;
}

function calculateDisplay(){

    let display = document.querySelector(`.display`);

    let equationArray = equationToArray(display.textContent);

    let answer= operate(Number(equationArray[0]),Number(equationArray[2]),equationArray[1]);

    if (Number.isInteger(answer)){
        display.textContent = answer;
    } else {
        display.textContent = answer.toFixed(2);
    }
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

            if (display.textContent.includes(" ")){
                calculateDisplay();
            }

            console.log(button.textContent);

            opWithSpacing = " " + button.textContent + " ";

            display.textContent = display.textContent + opWithSpacing;
        })
    });

    clearButton.addEventListener('click',() =>{
        display.textContent = "";
    });

    equalsButton.addEventListener('click',calculateDisplay)
}





console.log("======[SCRIPTS ATTACHED]======");

inputSetup();


