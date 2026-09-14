// This block is for output formatting
let taskNumber: number = 0;
let separator: string = '\n-------------';
let header: string = 'Task #'
let result;

// Task 1 - area of rectangle
taskNumber += 1;
// creation of variables
let rectLength: number;
let rectWidth: number;
let rectArea: number;
// variables initialization with values
rectLength = 2;
rectWidth = 5;
rectArea = rectLength * rectWidth;
// result and output
result = 'Rectangle area is: ' + rectArea;
console.log(header + taskNumber + '\n'+ result + separator);

// Task 2 - BMI (body-mass index)
taskNumber += 1;
//variables
let height: number = 1.87; // in meters
let weight: number = 95 ;// in kg
let bmi: number = weight / height ** 2;
//result + output
result = 'Body-mass index is: ' +  bmi.toFixed(1);
console.log(header + taskNumber + '\n'+ result + separator);

// Task 3 - temperature converter
taskNumber += 1;
//variables
let celcTemp: number = 36.6;
let farenhTemp: number = (9/5) * celcTemp + 32;
//result + output
result = 'Celcius temperature ' + celcTemp + ' is ' + farenhTemp.toFixed(1) + ' farenheit degrees';
console.log(header + taskNumber + '\n'+ result + separator);

//Task 4 - adult checker
taskNumber += 1;
//variables
let age: number = 11;
let isAdult: boolean = age >= 18;
//result + output
result = 'User is adult: ' +  (isAdult ? 'yes' : 'no');
console.log(header + taskNumber + '\n'+ result + separator);

// Task 5 - concatenation
taskNumber += 1;
//variables
let firstName: string = 'Anthony';
let lastName: string = 'Soprano';
//result + output
result = firstName + ' ' + lastName;
console.log(header + taskNumber + '\n'+ result + separator);

// Task 6 - age checker
taskNumber += 1;
//variables
let userAge: number = 16;
const requiredAge: number = 18; // const because the age of majority is not changeable
let hasAccess: boolean = userAge === requiredAge;
//output
console.log(header + taskNumber)
console.log(hasAccess);
// try another age
userAge = 18;
hasAccess = userAge === requiredAge;
//output
console.log(hasAccess);
console.log(separator);

// Task 7 - age checker with types
taskNumber += 1;
//variables
let userInput: string = '18';
let actualAge: number = 18;
let isEqualLoose: boolean = userInput == actualAge;
let isEqualStrict: boolean = userInput === actualAge;
// output + result
result = 'Is values equal: ' + isEqualLoose +
    '\nIs values and types equal: ' + isEqualStrict;
console.log(header + taskNumber + '\n'+ result + separator);

// Task 8 - types conversion
taskNumber += 1;
//variables
let stringVariable: string = '228';
let convertedToNum: number = Number(stringVariable);
//output
result = 'Initial string is ' + stringVariable +
        '\nConverted string to number is: ' + convertedToNum;
console.log(header + taskNumber + '\n'+ result + separator);

// Task 9 - number to string
taskNumber += 1;
//variables
let numVariable: number = 1488;
let numToStringConverted: string = String(numVariable);
// output
result = 'Initial number is ' + numVariable +
    '\nConverted number to string is ' + numToStringConverted;
console.log(header + taskNumber + '\n'+ result + separator);