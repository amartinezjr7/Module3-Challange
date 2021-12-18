# Module3-Challange
password generator project
In this project, my task was to create a JS script so that can create a password

This first thing that i did was create an propmt that asked for the length of the password. This was initialized in the writePassword() function.
This would allow the user to put any number between 8 and 128 characters. If there is a letter or special character, the program would ask the user
to input a number between 8 and 128 again.

Once the user inputs a legal number, the program then moves to ask the user if they want letters in their password, if they select ok, then letters will be initiated.
The same goes for Number and special characters

The user can pick any conbination of these options 

The possible characters and then put into a for loop that randomizes the possible characters until the length of the password has been met.

After this, I put in a passValidate() to ensure that at least one of each character is in the password. This is mostly for small password that have a lot of options, i.e. 8 character passwords that have all he inputs. So that should it not have a numbe when numbers are selected, it will go back into the generatePassword() function until the critaria is met.

Once a valid password is created, it will print it out to the text area.


Note:
I just wanted to add that, before i got clarification about the project, i created a cool function called letters() that would prompt the user to include a string, validate that it would only be uppercase or lowercase letters, the use that to create a password. I was going to do the same to numbers and special characters. I wanted to add this because i think i spent more time creating that function then the entire time it took to create the project.

I included it here to give the js code a cleaner look, but i couldn't bring myself to delete it

function letters() {
  var Arraychars = [window.prompt("Please pick the letters you want in your password")];
  chars = Arraychars.toString();
  chars = chars.replace(/[ ,]/g , "");
  if(!/^[a-zA-z]+$/.test(chars)){
    window.alert("Letters only please");
    letters();
  }
  else {
    return chars;
  }
  return chars;  
}