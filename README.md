# Regex-validate-PIN-code
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.  If the function is passed a valid PIN string, return true, else return false.
I passed most of the tests but I was stuck on the stupid checking step. I think my code works well but I should learn more quick ways and tricks.
like this:

function validatePIN (pin) {
  
  var pinlen = pin.length;
  var isCorrectLength = (pinlen == 4 || pinlen == 6);
  var hasOnlyNumbers = pin.match(/^\d+$/);
    
  if(isCorrectLength && hasOnlyNumbers){
    return true;
  }
  
  return false;

}
