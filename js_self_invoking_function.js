(function timesTwo(x) {
  console.log("inside timesTwo()");
  console.log(x)
  return 2 * x;
})(4);

console.log("***");
console.log("before setTimeout()");
setTimeout(function() {console.log("inside setTimeout()");}, 1500);
console.log("after setTimeout()");
