(function timesTwo(x) {
  console.log("inside timesTwo()");
  console.log(x)
  return 2 * x;
})(4);

console.log("***");
console.log("before setTimeout()");
setTimeout(function() {console.log("inside setTimeout()")}, 750);
console.log("after setTimeout()");

var tuna = "hey i am a tuna fish!";
console.log(tuna.typeOf);
debugger;

console.log("starting Matematika");
var matematika = {
  num1: 5,
  num2: 6,
  addTwoNumbers: function(num1, num2) {return num1 + num2;}
};

var num1 = 7;
var num2 = 5;

console.log(matematika.addTwoNumbers(num1, num2));
console.log(matematika.addTwoNumbers(function() {return 10}, num2));
