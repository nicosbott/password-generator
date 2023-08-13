// Create array for each type of character that can be included in password
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?", "~", "-"];

// ***Function to generate series of options/'questions' for password
function generatePasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to contain?"));
  
    // loop to make sure response is a whole number within parameters set and loops until it is
    while (length < 8 || length > 128 || isNaN(length)) {
      alert("Input value must be a whole number between 8 and 128.");
      var length = parseInt(prompt("How many characters would you like your password to contain?"));
    }

      alert("Your password will contain " + length + " characters.");

  // ***
  var hasLowerCaseCharacters = confirm("Click 'OK' to include lower case characters?");
  var hasUpperCaseCharacters = confirm("Click 'OK' to include upper case characters?");
  var hasNumericCharacters = confirm("Click 'OK' to include numbers?");
  var hasSpecialCharacters = confirm("Click 'OK' to include special characters?");

    // loop to make sure reponse contains at least ONE character type and loops until it does
    while (hasLowerCaseCharacters === false && hasUpperCaseCharacters === false && hasNumericCharacters === false && hasSpecialCharacters === false) {
      alert("You must choose at least one character type.");
      var hasLowerCaseCharacters = confirm("Click 'OK' to include lower case characters?");
      var hasUpperCaseCharacters = confirm("Click 'OK' to include upper case characters?");
      var hasNumericCharacters = confirm("Click 'OK' to include numbers?");
      var hasSpecialCharacters = confirm("Click 'OK' to include special characters?");
    }

    var passwordOptions = {
      length: length,
      hasLowerCaseCharacters: hasLowerCaseCharacters,
      hasUpperCaseCharacters: hasUpperCaseCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasSpecialCharacters: hasSpecialCharacters,
    }

  return passwordOptions;
}

// Function to randomize characters from arrays
function randomCharacters(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomChoice = arr[randomIndex];

  return randomChoice;
}

// Function to generate password based off of user input and randomizing array characters
function generatePassword() {
  var options = generatePasswordOptions();
  var optionalCharacters = [];
  var chosenCharacters = [];
  var password = [];
  
  if (options.hasLowerCaseCharacters) {
    optionalCharacters = optionalCharacters.concat(lowerCaseCharacters);
    chosenCharacters.push(randomCharacters(lowerCaseCharacters));
  }

  if (options.hasUpperCaseCharacters) {
    optionalCharacters = optionalCharacters.concat(upperCaseCharacters);
    chosenCharacters.push(randomCharacters(upperCaseCharacters));
  }

  if (options.hasNumericCharacters) {
    optionalCharacters = optionalCharacters.concat(numericCharacters);
    chosenCharacters.push(randomCharacters(numericCharacters));
  }

  if (options.hasSpecialCharacters) {
    optionalCharacters = optionalCharacters.concat(specialCharacters);
    chosenCharacters.push(randomCharacters(specialCharacters));
  }

  // Loop to for combining length chosen by user and random characters from arrays
  for (var i=0; i < options.length; i++) {
    var optionalCharacter = randomCharacters(optionalCharacters);

    password.push(optionalCharacter);
  }

  // Loop to make sure a character is chosen from each selected type
  for (var i=0; i < chosenCharacters.length; i++) {
    password[i] = chosenCharacters[i];
  }

  //bring it all together
  return password.join("");
}

// Assignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);