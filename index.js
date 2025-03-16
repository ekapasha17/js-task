const convertFahrenheitToCelsius = require('./convertTemperature');
const convertCentimeterToKilometer = require('./convertLength');
const isOdd = require('./checkOddEven');
const removeFirstOccurrence = require('./removeSubstring');
const isPalindrome = require('./checkPalindrome');

console.log(convertFahrenheitToCelsius(100)); // Example usage
console.log(convertCentimeterToKilometer(100000));
console.log(isOdd(1000));
console.log(removeFirstOccurrence("Hello world", "ell"));
console.log(isPalindrome("madam"));