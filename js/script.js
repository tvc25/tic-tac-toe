var currentPlayer = 'X';
var winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var board = ['','','','','','','','',''];
var winningArray = [];
var moveNumber = 0;
var winCounter = 0;

function switchPlayer() { //  if the current player is X then it will switch to O otherwise it can only be O anyway
  if (currentPlayer === 'X') {// current player is equal to X
    currentPlayer = 'O';// if the current player is not equal to X then it must be O
  } else {
    currentPlayer = 'X';// otherwise the current player is X
  }  
}

function checkWinner(){

  $.each(winningCombo, function(index, combo){
      declareWinner(index, combo);
  });
}

function declareWinner (index, combo){
    var noWinnerExists = true;
    if(board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]] && board[combo[0]] === "X"){
      noWinnerExists = false;
      $('.box').off('click');
      $('.box').text('WIN');// stops further turns from being taken
      $('div.winner').text(currentPlayer + ' ' + " WINS THE GAME ");// displays text only on a win
    } else if (board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]] && board[combo[0]] === "O"){
      noWinnerExists = false;
      $('.box').off('click');// stops further turns from being taken
      $('div.winner').text(currentPlayer + ' ' + " WINS THE GAME");// displays text only on a win
      $('.box').text('WIN');
    } else if ( moveNumber === 9 && noWinnerExists ){//determines match as a draw
      $('.box').off('click');// stops further turns from being taken
      $('.box').text('TIE');
      $('div.winner').text('D E A D L O C K');//determines match as a draw
    }
  }

function makeMove(e){
  $(this).off('click');
  var boardID = $(this).data("cell");
  board[boardID] = currentPlayer;
  $(this).addClass('cross').text(currentPlayer);
    moveNumber += 1;
    console.log(moveNumber);
    checkWinner();
    switchPlayer();
};

function clearBoard (){
  $('.box').text('');
  $('.winner').text('');
  board = ['','','','','','','','',''];
  winningArray = [];
  moveNumber = 0;
  winCounter = 0;
  currentPlayer = 'X';
  $('.box').on('click', makeMove); 
};

$(document).ready(function(){
  $('.restart-button').on('click', clearBoard);
  $('.box').on('click', makeMove);
});