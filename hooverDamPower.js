function changePowerTotal(curTotPower, genId, newStatus, genPower) {

  if (newStatus == "on") {
    console.log("Generator #" + genId + " is now on, adding " + genPower + " MW, for a total of " + (curTotPower + genPower) + " MW!");
    return curTotPower + genPower;
  } else if (newStatus == "off") {
    console.log("Generator #" + genId + " is now off, removing " + genPower + " MW, for a total of " + (curTotPower - genPower) + " MW!");
    return curTotPower - genPower;
  }

};

changePowerTotal(0, 2, "on", 62);
changePowerTotal(0, 2, "off", 62);
