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

function addRanger(location, name, skillz, station){
  console.log("hi")
  location.numRangers++;
  location["ranger" + location.numRangers] = {
    name: name,
    skillz: skillz,
    station: station
  };
}

addRanger(lighthouseRock, "Ilja Goushcha", "Boxing", 4);
console.log(lighthouseRock);
