function makeTargetAssigner( sharks, targets ){

  return function(shark) {
    var target = "";
    for (var i = 0; i < sharks.length; i++) {
      if (sharks[i] == shark) {
         target = targets[i];
      }
    }
    alert("What up, " + shark + "!\n" + "There've been " + target + " sightings in our 'hood!\n" + "Time for a swim-by lasering, homie!");
  };

}
