//Math functions
function add(num1, num2)
{
    let answer = num1 + num2;
    return Math.round(answer * 100) / 100
}

function subtract(num1, num2)
{
    let answer = num1 - num2;
    return Math.round(answer * 100) / 100
}

function multiply(num1, num2)
{
    let answer = num1 * num2;
    return Math.round(answer * 100) / 100
}

function divide(num1, num2)
{
    let answer = num1 / num2;
    return Math.round(answer * 100) / 100
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
let allInputsTaken = false;
let decimalOnePresent = false;
let decimalTwoPresent = false;
const display = document.querySelector(".display");

//Populates display when clicking buttons
function populateDisplay()
{
    const numbersContainer = document.querySelector(".numbersContainer");                                 // Get the buttons container
    //Create buttons for the numbers
    for (let i = 9; i >= 0; i--) 
    {
        const numbers = document.createElement("button");
        numbers.classList.add("numbers");
        numbers.textContent = i;

        //Listener to make the buttons display on screen when clicked
        numbers.addEventListener('click', () => {
            if (!inputOneTaken && firstNum.length < 10) 
            {
                firstNum += i;
                display.textContent = firstNum;                                         // Show only the first number
            } 
            else if (inputOneTaken && secondNum.length < 10)
            {
                allInputsTaken = true;
                secondNum += i;
                display.textContent = secondNum;      // Show the whole expression
            }
        });

        //Insert the number button at the beginning of the buttons container
        numbersContainer.appendChild(numbers);

    }

    //Listeners for the operators
    const operatorButtons = document.querySelectorAll(".operatorBtns");
    operatorButtons.forEach(button => {
        button.addEventListener('click', () => 
        {
            //Get the operator symbol from the button
            const op = button.textContent;

            //Check if inputs are not all taken
            if (!firstNum || !operator || !secondNum)
            {
                operatorPressed(op);                                    //Call the function to handle the operator
            }
            //If all inputs are taken, and user clicks on another operator button (a.k.a. operator chaining)
            else
            {
                const result = operate(firstNum, operator, secondNum);
                display.textContent = result;                           //Display the result
                firstNum = result;
                operator = op;                                          //Set the new operator
                secondNum = "";                                         //Reset the second number
                display.textContent = firstNum;        //Update display to show current operation
            }
        });
    });

    const operatorEquals = document.querySelector(".operatorEquals");
    operatorEquals.addEventListener('click', () => {
        //If user tries to divide by zero
        if(operator === "/" && secondNum === "0")
        {
            display.textContent = "Cannot divide by zero";
            resetCalculator();
        }
        // Ensure both numbers and the operator are present
        if (firstNum && operator && secondNum) 
        {
            const result = operate(firstNum, operator, secondNum);
            resetCalculator();
            firstNum = result;      //Make the result the firstNum so user can use it until clear button is pressed
            display.textContent = firstNum;
        }
    });

    //Listener for the clear button
    const clear = document.querySelector(".clearBtn");
    clear.addEventListener('click', () => {
        display.textContent = "";
        resetCalculator();      //Reset for the next operation
    });

    //Listener for the decimal button
    const decimal = document.querySelector(".decimalBtn");
    decimal.addEventListener('click', () => {
        //Decimal for the first number
        if (!decimalOnePresent && firstNum && !operator)
        {
            firstNum += ".";                                //Adds decimal to the input
            decimalOnePresent = true;
            display.textContent = firstNum;
        }
        //Decimal for the second number
        else if (!decimalTwoPresent && secondNum)
        {
            secondNum += ".";
            decimalTwoPresent = true;
            display.textContent = secondNum;
        }
    });

    //Listener for the backspace button
    const backspace = document.querySelector(".backspaceBtn");
    backspace.addEventListener('click', () => {
        if(firstNum && !operator)
        {
            //If there is only one number in the input
            if (firstNum.length === 1)
            {
                display.textContent = "";
                firstNum = "";
            }
            else if (firstNum.length > 1)
            {
                firstNum = firstNum.substring(0, firstNum.length - 1);      //Removes the last character in the string
                display.textContent = firstNum;
            }
        }
        else if (secondNum)
        {
            if (secondNum.length === 1)
            {
                secondNum = "";
                display.textContent = firstNum + " " + operator;                        //Keep the first number and operator visible
            }
            else if (secondNum.length > 1)
            {
                secondNum = secondNum.substring(0, secondNum.length - 1);
                display.textContent = secondNum;
            }
        }
    });
}

function operatorPressed(op) 
{
    //Ensure a first number exists and no operator is set
    if (firstNum && !operator)
    {
        operator = op;              //Set the operator
        inputOneTaken = true;       //Switch to inputting second number
    }
}

//Reset input tracking
function resetCalculator() 
{
    firstNum = "";
    operator = "";
    secondNum = "";
    inputOneTaken = false;
    decimalOnePresent = false;
    decimalTwoPresent = false;
}

populateDisplay(); 