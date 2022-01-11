// Assignment code here

// MAKE THESE ARRAYS FOR NUMBERS, LOWER, UPPER, SPECIAL, LENGTH
let passlength = [12];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
let specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "=", "+", ".", "/", "+"]


console.log(passlength);
console.log(numbers.length);
console.log(lowercase.length);
console.log(uppercase.length);
console.log(specialchar);

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Creating Prompt Alerts for the Password Criteria 
function generatePassword () {
  let passwordLength = prompt("Please enter the amount of characters you want for your password. Please choose more than 12 but less than 128 characters total!");

  let passwordnumberlength = confirm("Please confirm if you want numbers in your password!");

  let passLowerCaseLength = confirm("Please confirm if you want lowercases in your password!");

  let passUpperCaseLength = confirm("Please confirm if you want uppercases in your password!");

  let passSpecialLength = confirm("Please confirm if you want special characters in your password!");
console.log(passwordLength);
console.log(passwordnumberlength);
console.log(passLowerCaseLength);
console.log(passUpperCaseLength);
console.log(passSpecialLength);
}

// Creating Array for Length, Numbers, Lowercase, Uppercase, Special Characters



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

