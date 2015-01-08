function Fencepost(x, y, postNum) {
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}
Fencepost.prototype.sendRopeTo = function(connectedPost) {
  this.connectionsTo.push(connectedPost);
}

Fencepost.prototype.valueOf = function() {
  var x = this.x;
  var y = this.y
  return Math.sqrt(x*x + y*y);
}

var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);
post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);

console.log(post18);
console.log(post19);
console.log(post20);

console.log("distance to post:");
console.log(post18.valueOf());


var genericPost = {
  x: 0,
  y: 0,
  postNum: undefined,
  connectionsTo: undefined,
  sendRopeTo: function ( connectedPost ) {
                if(this.connectionsTo == undefined){
                   var postArray = [ ];
                   postArray.push(connectedPost);
                   this.connectionsTo = postArray;
                } else {
                   this.connectionsTo.push(connectedPost);
                }
              }
};

var post1 = Object.create(genericPost);
var post2 = Object.create(genericPost);
post1.x = -2;
post1.y = 4;
post1.postNum = 1;
post2.x = 5;
post2.y = 1;
post2.postNum = 2;
post1.sendRopeTo(post2);
post2.sendRopeTo(post1);
console.log(post1);
console.log(post2);
