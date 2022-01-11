// Assignment code here

// MAKE THESE ARRAYS FOR NUMBERS, LOWER, UPPER, SPECIAL, LENGTH
let passlength = [12];
let numbers = ["1234567890"];
let lowercase = ["abcdefghijklmnopqrstuvwxyz"];
let uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let specialchar = ["!@#$%^&*(=+,./|\{}"];

console.log(passlength);

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

