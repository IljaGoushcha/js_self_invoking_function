
var array = ["Inverted Peninsula", ",", "Inverted Peninsula", ", ", "I", "—", "P", "...", "hmmm", "."];
var internalThoughts = "";
console.time("time to run join");
internalThoughts = array.join(" ");
console.timeEnd("time to run join");

console.log(internalThoughts);
