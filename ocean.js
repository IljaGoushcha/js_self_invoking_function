var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
  gateClosed: true,
  weaponBulbs: superBlinders,
  capacity: 30,
  secretPassageTo: "Underwater Outpost",
  numRangers: 3,
  ranger1: {name: "Nick Walsh", skillz: "magnification burn", station: 2},
  ranger2: {name: "Drew Barontini", skillz: "uppercut launch", station: 3},
  ranger3: {name: "Christine Wong", skillz: "bomb defusing", station: 1},
  addRanger: function (name, skillz, station){
    this.numRangers++;
    this["ranger" + this.numRangers] = {
      name: name,
      skillz: skillz,
      station: station
    }
  },
  addBulb: function (name, wattage) {
    superBlinders.push([name, wattage]);
  }
};



lighthouseRock.addRanger("Ilja Goushcha", "Boxing", 4);
console.log(lighthouseRock);

console.log("***");
console.log(superBlinders);
console.log("---");
lighthouseRock.addBulb("Blasterbright", 5000);
lighthouseRock.addBulb("Sight Slayer", 1800);
lighthouseRock.addBulb("Burner of Souls", 7500);
console.log(superBlinders);

var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: { name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: { name: "Bijan Boustani", skillz: "Roundhouse Kicks", dayOff: "Tuesday"},
  ranger3: { name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: { name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};

console.log("***********");

function relieveDuty(vehicle, day) {
  var offDuty = [];
  var onDuty = [];
  for (var i = 1; i < (vehicle.numRangers + 1); i++) {
    if (vehicle["ranger" + i.toString()]["dayOff"] == day) {
      offDuty.push(vehicle["ranger" + i.toString()]);
    } else {
      onDuty.push(vehicle["ranger" + i.toString()]);
    }
    delete vehicle["ranger" + i.toString()];
  }

  onDuty.map(function(ranger, i){
    vehicle["ranger" + (i+1).toString()] = ranger;
  })

  vehicle["numRangers"] = onDuty.length;
  return offDuty;
};

console.log(relieveDuty(vehicle3, "Friday"));
console.log(vehicle3);


var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

console.log("*********");
function listGuns(guns) {
  for (speargun in guns) {
    console.log("Behold! " + speargun + ", with " + guns[speargun]["heft"] + " heft!");
  }
}
listGuns(rockSpearguns);






















