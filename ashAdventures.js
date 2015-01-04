function adventureSelector ( userChoice ){
  if (userChoice == 1) {
    return function() {console.log("You've selected the Vines of Doom!\nHope you have a swingin' time.");};
  } else if (userChoice == 2) {
    return function() {console.log("Looks like you want the Lake of Despair!\nWatch out for crocs. And I ain't talkin' about\nshoes.");};
  } else if (userChoice == 2) {
    return function() {console.log("The Caves of Catastrophe, really?\nAlright, well....nice knowing you.");};
  }
}

(adventureSelector(1))();
