# JavaScript and Git Tasks

## Git Tasks
1. **Initialize Git Repository**
   - `git init`
   - Add some files and commit them.
2. **Make Changes & Push to GitHub**
   - `git add .`
   - `git commit -m "Initial commit"`
   - `git push origin main`
3. **Branching & GitHub Flow**
   - `git branch new-branch`
   - `git checkout new-branch`
   - Make changes, commit, push.
   - Open a Pull Request on GitHub and merge.

## JavaScript Tasks

### 1. Convert Fahrenheit to Celsius
```javascript
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(fahrenheitToCelsius(100));
```

### 2. Convert Centimeter to Kilometer
```javascript
function cmToKm(cm) {
    return cm / 100000;
}
console.log(cmToKm(100000));
```

### 3. Check if number is odd or even
```javascript
function isOddOrEven(n) {
    return n % 2 === 0 ? 'Even' : 'Odd';
}
console.log(isOddOrEven(1000));
```

### 4. Remove first occurrence of a search string
```javascript
function removeFirstOccurrence(str, searchStr) {
    return str.replace(searchStr, '');
}
console.log(removeFirstOccurrence("Hello world", "ell"));
```

### 5. Check if a string is a palindrome
```javascript
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome("madam"));
```
