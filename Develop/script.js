var generateBtn = document.querySelector("#generate");

// Assignment code here
var numbers=["0","1","2","3","4","5","6","7","8","9"];
var lowerCase=["a"];
//var upperCase=
//var specialCharacters=
function generatePasswordPrompts() {
  var length = prompt("Enter length between 8 and 128 characters.")
  console.log(length)
  //if length <8 and >128 put alert: enter between 8 and 128
  var hasNumbers = confirm("Do you want numbers?")
  console.log(hasNumbers)
  //write confirm for uc, lc, spc
  //put an alert: to select at least one option type if hasNumbers etc etc
  var passwordOptions = {
    length:length,
    hasNumbers:hasNumbers
    //define the rest of the option uc, lc, spc 
  }
  return passwordOptions;
}
// Get references to the #generate element

function generatePassword() {
  var options = generatePasswordPrompts()
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
