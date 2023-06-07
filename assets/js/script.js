// Assignment code here
var options = [];

function generatePassword() {
  
  var userInput = window.prompt ("Enter Password Length (between 8-128 characters): ");
  if (userInput < 8) {
    generatePassword()
  }

  var lowerCase = window.confirm ("Do you want to include lowercase letters? ");
  if (lowerCase == true) {
    var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    options.push(...lowerLetters);
  }
  
  var upperCase = window.confirm ("Do you want to inlcude uppercase characters? ");
  if (upperCase == true) {
    var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "w", "X", "Y", "Z"];
    options.push(...upperLetters);
  }

  var numeric = window.confirm ("Do you want to include numbers? ");
  if (numeric == true) {
    var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    options.push(...numeric);
  }
    var otherCharacters = window.confirm ("Do you want to include special characters? ");
    if (otherCharacters == true) {
    var otherCharacters = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];
    options.push(...otherCharacters);
    }
  
  var finalPassword = random(userInput);
  return finalPassword;
}

function random (userInput) {
  var passwordValue = [];
  for (i=0; i < userInput; i++) {
    var randomValue = Math.floor(Math.random() * options.length);
    passwordValue = passwordValue.concat(options[randomValue]);
  }
  return passwordValue.join("");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
