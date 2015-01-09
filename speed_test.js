var IP = ["Nipping Global Variable", "Sneaky Forin", "Bulging Blocking Script"],
GH = ["Switch Blocks", "Pesky Gnat", "Aiedra"],
inhabitants = [IP,GH];

function populationGetter(popn){
  var list = "";
  for(var i = 0, x = popn.length; i < x; i++){
    for(var j = 0; j < popn[i].length; j++){
      list += (popn[i][j] + ", ");
    }
  }
  return list;
}

function SpeedTest(codeToMeasure, params, repetitions) {
  this.codeToMeasure = codeToMeasure;
  this.params = params;
  this.repetition = repetitions || 100000;
  this.avgTime = 0;
}
SpeedTest.prototype.startTest = function() {
  var startTime, stopTime, totalTime = 0;
  for (var i = 0; i < this.repetition; i++) {

    startTime = +new Date();
    console.log("startTime: " + startTime);

    this.codeToMeasure(this.params);

    stopTime = +new Date();
    console.log("stopTime:  " + stopTime);

    totalTime += (stopTime - startTime);
    console.log("totalTime: " + totalTime);
  }
  this.avgTime = totalTime / this.repetitions;
  return console.log("Average time to run:" + totalTime);
};

var mySpeedTest = new SpeedTest(populationGetter, inhabitants, 10);
mySpeedTest.startTest();

populationGetter(inhabitants);
