var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1}
};

function dontPanic(location) {
  var counter = 1;
  var alertString = "Avast, me hearties!\nThere be Pirates nearby! Stations!";
  while (getRanger(counter)) {
    alertString += "\n" + getRanger(counter)["name"] + ", man the " + superBlinders[getRanger(counter)["station"]-1][0] + "!";
    counter++;
  }
  console.log(alertString);
}

function getRanger(num) {
  return lighthouseRock["ranger" + num.toString()];
}

dontPanic();
