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
lighthouseRock.addBulb("dual-wielding hand crossbow", 4000);
console.log(superBlinders);
