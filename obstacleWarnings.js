function warningMaker( obstacle ){
  var count = 0;
  var zones = [];
  return function ( number, location ) {
    count++;
    zones.push(location);
    console.log("Beware! There have been " +
          obstacle +
          " sightings in the Cove today!\n" +
          number +
          " " +
          obstacle +
          "(s) spotted at the " +
          location +
          "!\n" +
          "This is Alert #" +
          count +
          " today for " +
          obstacle +
          " danger."
         );
    zones.map(function(zone){console.log(zone)});
  };
}

var giantIceBatAlert = warningMaker("giant ice bat");
giantIceBatAlert(20, "Frozen Falls");
console.log("***");
giantIceBatAlert(5, "Ice Caves");

