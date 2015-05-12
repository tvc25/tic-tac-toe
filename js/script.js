var currentPlayer = 'X';
var winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var board = ['','','','','','','','',''];
// var winner = ['X','X','X'];

function switchPlayer() { //  if the current player is X then it will switch to O otherwise it can only be O anyway
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }  
}

function checkWinner(){
  if (board === winningCombo) {
    console.log(currentPlayer + ' is the Winner!');
  } 
}
// for (var i = 0; i >= winningCombo.length; i++) {
//   console.log(winningCombo[i]);
// };
$(document).ready(function(){
  $('.box').on('click', function(e){
    var boardID = $(this).data("cell");
    board[boardID] = currentPlayer;
    $(this).addClass('cross').text(currentPlayer);
    checkWinner();
    switchPlayer();
  });
});

  //   if 
  // playerOne = board[$(this).data('id')]= 'X';
  //     else
  //   board[$(this).('id')]= 'O';
  

// 1. needs to get a player's first move
// 2. needs to log that move then switch the play
// 3. needs to check over the array after three goes to see if there's a winner



// $('.box').on('click', function (){
//   if(currentPlayer === 'X') {
//     $(this).text('O').addClass('nought');
//     currentPlayer = 'O'
//   }
//   else{
//     $(this).text('X').addClass('cross');
//     currentPlayer = 'X'
//   }
// })


//   var checkWinner = function(){
//     $("winningCombo").each(function(i, val){
//       $('winningCombo').find('data-id').each(function(i, j){
//         arr[i][j] = parseInt($(this).attr("data-id"));
//           console.log(this);
//           debugger
//             });
// });
// };
// checkWinner();
