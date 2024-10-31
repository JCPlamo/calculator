//Math functions
function add(num1, num2)
{
    return num1 + num2;
}

function subtract(num1, num2)
{
    return num1 - num2;
}

function multiply(num1, num2)
{
    return num1 * num2;
}

function divide(num1, num2)
{
    return num1 / num2;
}

function operate(num1, operator, num2)
{
    num1 = Number(num1);
    num2 = Number(num2);
    if(operator === "+")
    {
        return add(num1,num2);
    }
    else if(operator === "-")
    {
        return subtract(num1,num2);
    }
    else if(operator === "*")
    {
        return multiply(num1,num2);
    }
    else if(operator === "/")
    {
        return divide(num1,num2);
    }

}

//Global Variables
var firstNum = "";
var operator = "";
var secondNum = "";
let inputOneTaken = false;
const display = document.querySelector(".display");

//Populates display when clicking buttons
function populateDisplay()
{
    const buttons = document.querySelector(".buttons"); // Get the buttons container
    //Create buttons for the numbers
    for (let i = 0; i < 10; i++) 
    {
        const numbers = document.createElement("button");
        numbers.classList.add("numbers");
        numbers.textContent = i;

        //Listener to make the buttons display on screen when clicked
        numbers.addEventListener('click', () => {
            if (!inputOneTaken) {
                firstNum += i;
                display.textContent = firstNum; // Show only the first number
            } else {
                secondNum += i;
                display.textContent = firstNum + " " + operator + " " + secondNum; // Show the whole expression
            }
        });

        // Insert the number button at the beginning of the buttons container
        buttons.insertBefore(numbers, buttons.firstChild);

    }

    //Listeners for the operators
    const operatorButtons = document.querySelectorAll(".operatorBtns")
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const op = button.textContent; // Get the operator symbol from the button
            operatorPressed(op); // Call the function to handle the operator
        });
    });

    const operatorEquals = document.querySelector(".operatorEquals")
    operatorEquals.addEventListener('click', () => {
        if (firstNum && operator && secondNum) { // Ensure both numbers and the operator are present
            const result = operate(firstNum, operator, secondNum);
            display.textContent = result; // Display the result
            resetCalculator(); // Reset for the next operation
        }
    });

    //Listener for the clear button
    const clear = document.querySelector(".clearBtn")
    clear.addEventListener('click', () => {
        display.textContent = " ";
        resetCalculator();
    });

}

function operatorPressed(op) {
    if (firstNum && !operator) { // Ensure a first number exists and no operator is set
        operator = op; // Set the operator
        inputOneTaken = true; // Switch to inputting second number
        // You may want to update the display to show the operator, e.g.:
        display.textContent = firstNum + " " + operator;
    }
}

function resetCalculator() {
    firstNum = "";
    operator = "";
    secondNum = "";
    inputOneTaken = false; // Reset input tracking
}

populateDisplay(); 
// Testing
console.log(operate(1, "+", 1));
console.log(operate(1, "-", 1));
console.log(operate(1, "*", 1));
console.log(operate(1, "/", 1));