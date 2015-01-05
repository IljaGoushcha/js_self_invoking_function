function warningMaker( obstacle ){
  return (function(){console.log("Beware! There have been " + obstacle + " sightings in\n" + "the Cove today!");})();
}

warningMaker("bomb");
