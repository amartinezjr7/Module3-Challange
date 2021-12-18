// Assignment Code
var generateBtn = document.querySelector("#generate");
var numLength = "";
var chars = "";
var spChars = "";



console.log(numLength);


//this function is to return a valid number for the password length
function numValidate(){
  numLength = parseInt(window.prompt("pick a password length between 8 and 128"));
  if ( /^[0-9,.]+$/.test(numLength)) {
    console.log('pass');
    if(numLength>=8 && numLength <=128){
      window.alert("great choice on a " + numLength + " long password");
    }
    else{
      window.alert("lets try that again...");
      numValidate();
    }
    return numLength;

  } else {
  console.log('fail');
  window.alert("lets try that again..");
  numValidate();
  }
}

function letters() {
  var Arraychars = [window.prompt("Please pick the letters you want in your password")];
  chars = Arraychars.toString();
  chars = chars.replace(/[ ,]/g , "");
  if(!/^[a-zA-z]+$/.test(chars)){
    window.alert("Letters only please");
    letters();
  }
  else return chars;
  console.log(chars);
  return chars;  
}

function generatePassword(){
  numValidate();
  letters();
  //var chars = "abcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*(){}|ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for( var i = 0; i <= numLength; i++){
    var randomNum = Math.floor(Math.random()* chars.length);
    password += chars.substring(randomNum, randomNum + 1);

  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
