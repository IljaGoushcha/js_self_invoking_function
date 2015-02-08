function LeatherArmor(bodyStyle, numBuckles, numSpaulders){
  this.bodyStyle = bodyStyle;
  this.numBuckles = numBuckles;
  this.numSpaulders = numSpaulders || 10;
}
function ChainMail(metal, linkDiameter, hasHood, skirtLength){
  this.metal = metal;
  this.linkDiameter = linkDiameter;
  this.hasHood = hasHood;
  this.skirtLength = skirtLength;
}

var arrayWithArmor = [{"bodyStyle":"nice leather armor", "numBuckles":8, "numSpaulders": 9}];
console.log(arrayWithArmor[0]);
console.log(arrayWithArmor[0] instanceof LeatherArmor);
var myLeatherArmor = new LeatherArmor("kjh", 7);
console.log(myLeatherArmor);
console.log(myLeatherArmor instanceof LeatherArmor);

var myChainMail = new Object();
myChainMail.metal = "platinum";
myChainMail["linkDiameter"] = 9;
console.log(myChainMail);
console.log(myChainMail instanceof ChainMail);
