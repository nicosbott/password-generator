var generateBtn = document.querySelector("#generate");

// Create array for each type of character that can be included in password
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?", "~", "-"];

// ***Function to generate series of options/'questions' for password
function generatePasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  
    // loop to make sure response is a whole number within parameters set
    while(length < 8 || length > 128 || isNaN(length)) {
      alert("Input value must be a whole number between 8 and 128.");
      var length = parseInt(prompt("How many characters would you like your password to contain?"));
    }

      alert("Your password will contain " + length + " characters.");

  // ***
  var hasLowerCaseCharacters = confirm("Click 'OK' to include lower case characters?");
  console.log(hasLowerCaseCharacters);
  var hasUpperCaseCharacters = confirm("Click 'OK' to include upper case characters?");
  console.log(hasUpperCaseCharacters);
  var hasNumericCharacters = confirm("Click 'OK' to include numbers?");
  console.log(hasNumericCharacters);
  var hasSpecialCharacters = confirm("Click 'OK' to include special characters?");
  console.log(hasSpecialCharacters);

    // loop to make sure reponse contains at least ONE character type
    while(hasLowerCaseCharacters === false && hasUpperCaseCharacters === false && hasNumericCharacters === false && hasSpecialCharacters === false) {
      alert("You must choose at least one character type.");
      var hasLowerCaseCharacters = confirm("Click 'OK' to include lower case characters?");
      var hasUpperCaseCharacters = confirm("Click 'OK' to include upper case characters?");
      var hasNumericCharacters = confirm("Click 'OK' to include numbers?");
      var hasSpecialCharacters = confirm("Click 'OK' to include special characters?");
    }

  // var to capture users reponse
  var passwordOptions = {
    length: length,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
  };

  return passwordOptions;
}

var passwordCharacters = []

if (hasLowerCaseCharacters) {
  passwordOptions = passwordCharacters.concat(lowerCaseCharacters)
}

if (hasUpperCaseCharacters) {
  passwordCharacters = passwordsCharacters.concat(upperCaseCharacters)
}

if (hasNumericCharacters) {
  passwordCharacters = passwordCharacters.concat(numericCharacters)
}
// Function to generate random characters from array
function generateRandomCharacters(arr) {

}

// Get references to the #generate element
function generatePassword() {
  var options = generatePasswordOptions();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
