function Fencepost (x, y, postNum){
  this.x = x;
  this.y = y;
  this.postNum = postNum;
  this.connectionsTo = [];
}
Fencepost.prototype = {
  sendRopeTo: function ( connectedPost ){
    this.connectionsTo.push(connectedPost);
  },
  removeRope: function ( removeTo ){
    var temp = [];
    for(var i = 0; i<this.connectionsTo.length; i++){
      if(this.connectionsTo[i].postNum != removeTo){
        temp.push(this.connectionsTo[i]);
      }
    }
    this.connectionsTo = temp;
  },
  movePost: function (x, y){
    this.x = x;
    this.y = y;
  },
  valueOf: function (){
  return Math.sqrt( this.x*this.x + this.y*this.y );
  },
  toString: function() {
    var str = "";
    str += "Fence post #" + this.postNum + "\n";
    str += "Connected to posts:\n";
    this.connectionsTo.map(function(post) {
      str += post.postNum + "\n";
    })
    str += "Distance from ranch: " + this.valueOf() + " yards";
    return str;
  }
};

var post18 = new Fencepost(-3, 4, 18);
var post19 = new Fencepost(5, -1, 19);
var post20 = new Fencepost(-2, 10, 20);
post18.sendRopeTo(post20);
post20.sendRopeTo(post18);
post18.sendRopeTo(post19);
post19.sendRopeTo(post18);

console.log(post18.toString());
