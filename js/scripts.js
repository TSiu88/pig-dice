// Business Logic
function Game(){
  this.players = [];
  this.winningScore = 100;
  this.currentPlayerId = 0;
  this.gameOver = false;
}

Game.prototype.addPlayer = function(player){
  this.players.push(player);
}

Game.prototype.getPlayerScore = function(playerId){
  return this.players[playerId].totalScore;
}

Game.prototype.startTurn = function(playerObject){
  var newTurn = new Turn(playerObject);
  return newTurn;
}

Game.prototype.switchPlayer = function(currentPlayerId){
  if (currentPlayerId === 0) {
    this.currentPlayerId = 1;
  } else if (currentPlayerId === 1) {
    this.currentPlayerId = 0;
  }
}

Game.prototype.endTurn = function(){
  if (this.getPlayerScore(this.currentPlayerId) >= this.winningScore) {
    this.gameOver = true;
  } else {
    this.switchPlayer(this.currentPlayerId);
  }
}

function Player(id){
  this.id = id;
  this.totalScore = 0;
}

Player.prototype.increaseTotalBy = function(turnScore){
  this.totalScore += turnScore;
}

function Turn(playerObject){
  this.playerObject = playerObject;
  this.runningTotal = 0;
}

Turn.prototype.roll = function(){
  var newDie = new Die();
  updateTurnDisplay(newDie.value);
  var rollPoints = newDie.evaluateRoll();
  if (rollPoints === 0){
    this.runningTotal = 0;
    return false;
  } else {
    this.runningTotal += rollPoints;
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



// User Interface Logic -----------------------------------------------------
var game = new Game();
var currentTurn;

function beginTurn(player){
  currentTurn = game.startTurn(player);
  takeATurn();
}

function takeATurn(){
  var continuingTurn = currentTurn.roll();
  if (!continuingTurn) {
    alert("You rolled a 1. Lose a turn. =(")
    game.endTurn();
    newTurnScreen();
  } else {
    continueTurnScreen();
  }
  
}

function hold(){
  game.players[game.currentPlayerId].increaseTotalBy(currentTurn.runningTotal);
  displayScores();
  game.endTurn();
  if(game.gameOver === true){
    gameOver();
  }else{
    newTurnScreen();
  }
}

function gameOver(){
  $("#gameOver").show();
  $("#turn").hide();
  displayScores();
  $("#winner").text(game.currentPlayerId + 1);
}

function displayScores(){
  $("#p1score").text(game.players[0].totalScore);
  $("#p2score").text(game.players[1].totalScore);
}

function updateTurnDisplay(die){
  $("#diceValue").text(die);
}

function continueTurnScreen(){
  $("#holdOrRollAgain").show();
  $("#rollDie").hide();
  $("#turnTotal").text(currentTurn.runningTotal);
}

function newTurnScreen(){
  $("#rollDie").show();
  $("#currPlayer").text("Player " + (game.currentPlayerId+ 1));
  $("#holdOrRollAgain").hide();
  $("#diceValue").text("");
  $("#turnTotal").text("");
}

$(document).ready(function(){
  $("#winScore").text(game.winningScore);
  $("#startButton").click(function(){
    game = new Game();
    $("#currentStats").show();
    $("#turn").show();
    newTurnScreen();
    $("#gameOver").hide();
    $("#newGame").hide();

    var player1 = new Player(0);
    var player2 = new Player(1);
    game.addPlayer(player1);
    game.addPlayer(player2);

    displayScores();
  });

  $("#rollButton").click(function(){
    beginTurn(game.players[game.currentPlayerId]);
  });

  $("#holdButton").click(function(){
    hold();
  });

  $("#rollAgainButton").click(function(){
    takeATurn();
  });

  $("#newGameButton").click(function(){
    $("#gameOver").hide();
    $("#newGame").show();
    $("#currentStats").hide();
  });
});