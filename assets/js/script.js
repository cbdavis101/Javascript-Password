// Assignment code here

// Creating Array for Length, Numbers, Lowercase, Uppercase, Special Characters
let passlength = [""];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
let specialchar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", "=", "+", ".", "/", "+"]

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
  let passwordLength = parseInt (prompt("Please enter the amount of characters you want for your password. Please choose more than 12 but less than 128 characters total!"));

      if (isNaN(passwordLength)) {

      window.alert("Please enter a number between 8 and 128!");
      return;
    }
      
      if (passwordLength < 8) {

      window.alert("Please type in a password that is atleast 8 characters long!");
      return;
    }

      if (passwordLength > 128) {

      window.alert("Please type in a password that is less than 128 characters but more than 8 characters long!");
      return;
    }

  let passwordNumberlength = confirm("Please confirm if you want numbers in your password!");

  let passLowerCaseLength = confirm("Please confirm if you want lowercases in your password!");

  let passUpperCaseLength = confirm("Please confirm if you want uppercases in your password!");

  let passSpecialLength = confirm("Please confirm if you want special characters in your password!");

  if (passwordNumberlength === false && passLowerCaseLength === false && passUpperCaseLength === false && passSpecialLength === false) {
    window.alert("Please select a valid character type to contiunue");
    return;
  }
}










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

