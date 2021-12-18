// Assignment Code
var generateBtn = document.querySelector("#generate");
var numLength = "";
var chars = "";
var spChars = "";
var charLet= "";
var charNum = "";


//this function is to return a valid number for the password length
function numValidate(){
  numLength = parseInt(window.prompt("pick a password length between 8 and 128"));
  if ( /^[(0-9,.)]+$/.test(numLength)) {
    console.log('pass');
    if(numLength>=8 && numLength <=128){
      window.alert("great choice on a " + numLength + " character long password");
    }
    else{
      window.alert("lets try that again...Numbers between 8 and 128");
      numValidate();
    }
    return numLength;

  } else {
  window.alert("lets try that again...Numbers between 8 and 128");
  numValidate();
  }
}

//this function confirm if the user wanted to include letters in their password
function PLetter(){
charLet = window.confirm("do you want letters?");

  if (charLet){
  charLet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
  }
  else {
    charLet = "";
    
  }
  return charLet;
}

//this function confirms if the user wants to include numbers in their password
function PNumbers(){
  charNum = window.confirm("do you want numbers?");

  if (charNum){

    charNum = "1234567890";
  }
  else{
    charNum = "";  
  }
  return charNum;
}

//this function confirms if the user wants to include special characters in their password
function PspChars(){
  spChars = window.confirm("Do you want to include special characters?");
  if (spChars){
    spChars = "~!@#$%^&*(){}|";
  }
  else{
    spChars = "";
  }
  return spChars;
}

//this is a validation function that test to see if the generated password includes at least one of each criteria 
function passValidate(){
  if (/^[a-zA-z0-9~!@#$%^&*(){}|]+$/.test(password)){
    console.log("yup");
    return password;
  }
  else{
    console.log("nope");
    generatePassword();
  }
}


function generatePassword(){
  PLetter();
  PNumbers();
  PspChars();

  //In this area, i included a randomizer that adds all the possible characters and randomizes them to the length the user chose
    chars = charNum + charLet+spChars;
    var password="";
  for( var i = 0; i <= numLength; i++){
    var randomNum = Math.floor(Math.random()* chars.length);
    password += chars.substring(randomNum, randomNum + 1);

  }
  return password;
}
// Write password to the #password input
function writePassword() {
  numValidate();
  password = generatePassword();  
  console.log(password);
  passValidate();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

