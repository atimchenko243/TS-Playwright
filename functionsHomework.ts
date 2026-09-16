// Task 1 - simple functions
// 1.1 temperature converter
function convertToFahrenheit(celsius: number): number {
    return Math.round((celsius * 9/5 + 32) * 100) / 100; //to be sure that result has 2 decimals if inputs are fractional
}
// 1.2 greeting generator
function greetUser(firstName: string, lastName: string): string {
    return 'Hello, ' + firstName + ' ' + lastName + '!';
}
// 1.3 rectangle area calculator
function calculateArea(width: number, height: number): number {
   return Math.round((width * height) * 100) / 100; //to be sure that result has 2 decimals if inputs are fractional
}
// 1.4 simple sum
function addNumbers(firstNum: number, secondNum: number): number {
    return firstNum + secondNum;
}
// out of homework scope - just for pretty output
function showSeparator(): void {
    console.log('---------------------');
}
//setting common export
export {convertToFahrenheit, calculateArea, greetUser, addNumbers, showSeparator};


