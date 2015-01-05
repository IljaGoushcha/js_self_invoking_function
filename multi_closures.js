var hidden = mystery(3); //hidden = mystery2(multiplier)
var jumble = mystery3(hidden);
var result = jumble(2);

function mystery ( input ){
  var secret = 4;
  input+=2; // input = 5
  function mystery2 ( multiplier ) {
    multiplier *= input;  //input = 5
    return secret * multiplier;
  }
  return mystery2;
}
function mystery3 ( param ){
  function mystery4 ( bonus ){
    return param(6) + bonus; //param(6) = mystery2(6) + 2
  }
  return mystery4;
}

//result = 122
