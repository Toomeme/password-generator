//declare variables
var length = null;
var upperChars = null;
var numberChars = null;
var specialChars = null;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//get desired length
function passLength() {
  var promptLength = window.prompt('Enter desired password length. Minimum 8, Maximum 128.');
  // validate prompt answer 
  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("You need to specify a valid length! Please try again.");
    // use return to call it again and stop the rest of this function from running
    return passLength();
  }
  else{
    length = promptLength;
  }
  };

  function passChars(){
    // ask if user wants to use uppercase characters
    var upperConfirm = window.confirm("Use uppercase characters?");
    // if yes, add uppercase to charset string
    if (upperConfirm) {
      upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
    // ask if user wants to use numeric characters
    var numConfirm = window.confirm("Use numeric characters?");
    // if yes, add numbers to charset string
    if (numConfirm) {
      numberChars = "0123456789";
      }
    // ask if user wants to use special characters
    var spclConfirm = window.confirm("Use special characters?");
    // if yes, add special characters to charset string
    if (spclConfirm) {
      specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      }
  };

//password generation function
function generatePassword() {
//reset password value
var retVal = ""; 
var charset = `abcdefghijklmnopqrstuvwxyz${upperChars}${numberChars}${specialChars}`;
  for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.random() * n);
    }
    return retVal;
};

// Write password to the #password input
function writePassword() {
  //prompt for password length
  passLength();
  //prompt for optional characters
  passChars();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //reset character values
  upperChars = null;
  numberChars = null;
  specialChars = null;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
