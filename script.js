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

var firstNum;
var operator = "";
var secondNum;

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

//Testing
console.log(operate(1,"+",1))
console.log(operate(1,"-",1))
console.log(operate(1,"*",1))
console.log(operate(1,"/",1))