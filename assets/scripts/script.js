var passwordDisplay = document.getElementById("password-selector")

const specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Asks for password length and defaults at 8 characters
function getPasswordLength() {
  let passwordLength = Number(prompt("How long do you want the password to be: 8-128\nDefault: 8"));

  if (typeof passwordLength !== 'number' || passwordLength < 8 || passwordLength > 128) {
    passwordLength = 8;
  }

  return passwordLength;
}

function generatePassword() {
  let passwordArray = [];
  let password = [];
  let randomNum;

  let specialCriteria = confirm("Do you want special characters in your password?");
  let numberCriteria = confirm("Do you want numbers in your password?");
  let lowerCriteria = confirm("Do you want lowercase letters in your criteria?");
  let upperCriteria = confirm("Do you want uppercase letters in your criteria?");

  // Special Characters
  if (specialCriteria) {
    passwordArray = passwordArray.concat(specialChars);
  };

  // Numbers
  if (numberCriteria) {
    passwordArray = passwordArray.concat(numbers);
  };

  // Lowercase letters
  if (lowerCriteria) {
    passwordArray = passwordArray.concat(lowerCase);
  };
  
  // Uppercase letters
  if (upperCriteria) {
    passwordArray = passwordArray.concat(upperCase);
  };

  while (password.length <= passwordLength) {

      randomNum = Math.floor(Math.random() * passwordArray.length);
      password.push(passwordArray[randomNum]);

    };

    return password.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  passwordLength = getPasswordLength();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    alert(password);
  } else {
    alert("You didn't accept any of the prompts");
  }
  passwordText.value = password;
}


function openCriteria() {
  passwordDisplay.style.display = 'none';
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);