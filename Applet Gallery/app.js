// Variable declarations with data types
let valueOne = 1;
let valueTwo = 5;

let favoriteDessert = "pie";
let firstLetter = 'a';

// Arithmetic operations
let diffResult = valueOne - valueTwo;
console.log('Subtraction:', diffResult);

let sumResult = valueOne + valueTwo;
console.log('Addition:', sumResult);

let productResult = valueOne * valueTwo;
console.log('Multiplication:', productResult);

// Handling division by zero
if (valueTwo !== 0) {
    let quotientResult = valueOne / valueTwo;
    console.log('Division:', quotientResult);
} else {
    console.log("Error: Division by zero is not allowed.");
}

// Conditional statements
let userAge = 10;
let userAgeStatus = userAge >= 18 ? "Adult" : "Minor";
console.log(userAgeStatus);

// Switch statement
let gradeLetter = 'B';

switch (gradeLetter) {
    case 'A':
        console.log('A');
        break;
    case 'B':
        console.log('B');
        break;
    case 'C':
        console.log('C');
        break;
    case 'D':
        console.log('D');
        break;
    default:
        console.log('Default');
}

// For loop example
for (let loopIndex = 0; loopIndex < 15; loopIndex++) {
    console.log('For Loop:', loopIndex);
}

// While loop example
let whileCounter = 0;
while (whileCounter < 15) {
    console.log('While Loop:', whileCounter);
    whileCounter++;
}

// Function to check if a number is odd or even
function determineOddEven(numberToCheck) {
    return numberToCheck % 2 === 0 ? `${numberToCheck} is even` : `${numberToCheck} is odd`;
}

console.log(determineOddEven(2));
console.log(determineOddEven(17));
