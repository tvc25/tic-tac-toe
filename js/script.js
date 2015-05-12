var firstPlayer = 'X'
var secondPlayer = 'O'
var winningCombo = [[0,1,2],[3,4,5],[6,7,8][0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
var board = ['','','','','','','','','']


// var getFirstMove = function (){
//  currentPlayer = ( firstPlayer === X ) ? O : X;
// }

  var switchPlayer = function() {
   

  };

for (var i = 0; i >= winningCombo.length; i++) {
  console.log(winningCombo[i]);
};

$(document).ready(function(){
  $('.box').on('click', function(e){
    var boardID = $(this).attr("data-id")-1;
    board[boardID] = firstPlayer;
    $(this).addClass('cross');
    console.log(board)

    // if 
  // playerOne = board[$(this).data('id')]= 'X';
    //   else
    // board[$(this).('id')]= 'O';
  
  });





})

// 1. needs to get a player's first move
// 2. needs to log that move then switch the play
// 3. needs to check over the array after three goes to see if there's a winner