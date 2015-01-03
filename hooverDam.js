var totalGen = 19;
var totalMW = 0;
var addedMW = 0;
console.log("****" + totalMW);

for (var currentGen = 1; currentGen <= totalGen; currentGen++) {

  if (currentGen <= 4) {
    addedMW = 62;
    totalMW += 30;
    console.log("****" + totalMW);
  } else {
    addedMW = 124;
    totalMW += 62;
  }

  if (currentGen % 2 === 0) {
    console.log("Generator #" + currentGen + " is on, adding " + addedMW + " MW, for a total of " + totalMW + " MW!");
  } else {
    console.log("Generator #" + currentGen + " is off.");
  }
}
