function validatePIN(pin) {
  var intArr = pin.split("");
  let a = 0;
  for (let i = 0; i < intArr.length; i++) {
    if (!isNaN(intArr[i]) == true) {
      a++;
    }
  }
  if (a === intArr.length) {
    if (a === 4 || a === 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
