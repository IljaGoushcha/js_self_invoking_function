var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

Array.prototype.countCattle = function(type) {
  var count = 0;
  this.map(function(cow) {
    if (cow["type"] == type) {
      count++;
    };
  });
  return count;
};

console.log(canyonCows.countCattle("cow"));
console.log(canyonCows.countCattle("calf"));
console.log(canyonCows.countCattle("bull"));

console.log("*****");

Object.prototype.noCalvesYet = function() {
  if (this["hadCalf"] == null && this["type"] == "cow") {
    return true;
  }
  return false;
};

console.log(forestCows[2].noCalvesYet());

