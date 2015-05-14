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
  winningArray = [];// empty array to be populated with the entries the player makes on the board.

  for(j = 0; j < board.length; j++){// iterate over the board array
    if(board[j] === currentPlayer){
      winningArray.push(j);// push the entry of the player into the board's array
    }
  }

  for (var i = 0; i < winningCombo.length; i++) {
    for(k = 0; k < winningArray.length; k++){// for loops i and j iterate over both the winning array and the winning combination array to check if there is a winner
      if (winningCombo[i][0] === winningArray[k]){
        if (winningCombo[i][1]=== winningArray[k+1] && winningCombo[i][2] === winningArray[k+2]){// this checks whether a winner is present over the three arrays and if they match then there is a winning outcome
           $('div.winner').text(currentPlayer + ' ' + " HAS WON THE GAME OF LIFE!!! HERO!!!");// displays text only on a win
           // $('.box').off('click');// stops further turns from being taken
        } else if( moveNumber === 9 && currentPlayer != winningCombo){
          $('div.winner').text('We have DEADLOCK, FIGHT TO THE DEATH!');//determines match as a draw
        }
      }
    }
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
  board = [];
  winningArray = [];
  moveNumber = 0;
  winCounter = currentPlayer +1;
  // $.each($('.box'), function(index, element){
  //   $(this).on('click');
  // });
  $('.box').on('click', makeMove);  
};


$(document).ready(function(){
  $('.clear').on('click', clearBoard);

  $('.box').on('click', makeMove);
});