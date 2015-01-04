var puzzlers = [
  function ( a ) { return 8*a - 10;},
  function ( a ) { return (a-3) * (a-3) * (a-3); },
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];
var start = 2;

var applyAndEmpty = function(startValue, queueOfFunctions) {

  var input = startValue;
  var output;
  var outputFunction;
  var lengthOfQueue = queueOfFunctions.length;
  // console.log((queueOfFunctions[0])(2));
  // console.log((queueOfFunctions.shift())(2));
  // console.log("-----");

  for (var i = 0; i < lengthOfQueue; i++) {
    console.log("counter i=" + i);
    output = (queueOfFunctions.shift())(input);
    console.log(output);
    input = output;
  }
  console.log("***");
  console.log(output);
  return output;
}

applyAndEmpty(start, puzzlers);

var puzzlersX = [
  function ( a ) { return 8*a - 10; },
  function ( a ) { return (a-3) * (a-3) * (a-3); },
  function ( a ) { return a * a + 4; },
  function ( a ) { return a % 5; }
];

console.log("*** ***");
console.log((puzzlersX[(puzzlersX[1])(3)])((puzzlersX[3])(9)));
