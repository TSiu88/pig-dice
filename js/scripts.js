// Business Logic
function Game(){
  this.players = [];
  this.winningScore = 100;
  this.currentPlayerId = 1;
}

Game.prototype.addPlayer = function(player){
  this.players.push(player);
}

Game.prototype.startTurn = function(playerObject){
  var newTurn = new Turn(playerObject);
  return newTurn;
}

Game.prototype.switchPlayer = function(currentPlayerId){
  if (currentPlayerId === this.players[0].id) {
    this.currentPlayerId ++;
  } else if (currentPlayerId === this.players[1].id) {
    this.currentPlayerId --;
  }
}

Game.prototype.endTurn = function(playerId){
  if (this.totalScore >= this.winningScore) {
    this.gameOver();
  } else {
    this.switchPlayer(playerId);
  }
}

Game.prototype.gameOver = function(){
  return this.currentPlayerId;
}

function Player(id){
  this.id = id;
  this.totalScore = 0;
}

function Turn(playerObject){
  this.playerObject = playerObject;
  this.runningTotal = 0;
}

Turn.prototype.roll = function(){
  var newDie = new Die();
  return newDie.beRolled();
  //figure out where to evaluate and add roll value
}

function Die(){
  this.maxValue = 6;
}

Die.prototype.beRolled = function(){
  var max = Die.maxValue;
  return Math.floor(Math.random() * max) + 1;
}

// User Interface Logic
$(document).ready(function(){
  
});