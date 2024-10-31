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

var firstNum = "";
var operator = "";
var secondNum = "";

function operate(num1, operator, num2)
{
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

//Populates display when clicking buttons
function populateDisplay()
{
    

    const buttons = document.querySelector(".buttons"); // Get the buttons container
    const display = document.querySelector(".display");
    //Create buttons for the numbers
    for (let i = 0; i < 10; i++) 
    {
        const numbers = document.createElement("button");
        numbers.classList.add("numbers");
        numbers.textContent = i;

        //Listeners to make the buttons display on screen when clicked
        numbers.addEventListener('click', () => {
            firstNum += i;
            display.textContent = firstNum;
        });

        // Insert the number button at the beginning of the buttons container
        buttons.insertBefore(numbers, buttons.firstChild);

    }
}

populateDisplay(); 
// Testing
console.log(operate(1, "+", 1));
console.log(operate(1, "-", 1));
console.log(operate(1, "*", 1));
console.log(operate(1, "/", 1));