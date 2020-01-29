// Business Logic
function Game(){
  this.players = [];
  this.winningScore = 100;
  this.currentPlayerId = 0;
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
  var rollPoints = newDie.evaluateRoll();
  if (rollPoints === 0){
    runningTotal = 0;
    return false;
  } else {
    runningTotal += rollPoints;
    return true;
  }
}

function Die(){
  this.value = Math.floor(Math.random() * 6) + 1;
}

Die.prototype.evaluateRoll = function(){
  if (this.value === 1) {
    return 0;
  } else {
    return this.value;
  }
}

// User Interface Logic
var game = new Game();

function takeATurn(player){
  var currentTurn = game.startTurn(player)
  var continuingTurn = currentTurn.roll();
  if (!continuingTurn) {
      game.endTurn(player.id);
    } else {
      // show buttons

    }
  }
}

function hold(){
  game.endTurn(); // -- return true/false
  // change screen
  // if false, game over screen
  // if true, takeATurn(game.players[currentPlayerId])
}

function rollAgain(){

}

$(document).ready(function(){

});