var currentPlayer = 'X';
var winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var board = ['','','','','','','','',''];
var winningArray = [];
var moveNumber = 0;
// var winner = ['X','X','X'];

function switchPlayer() { //  if the current player is X then it will switch to O otherwise it can only be O anyway
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }  
}

function checkWinner(){
  winningArray = [];

  for(j = 0; j < board.length; j++){
    if(board[j] === currentPlayer){
      winningArray.push(j);
    }
  }

  for (var i = 0; i < winningCombo.length; i++) {
    for(k = 0; k < winningArray.length; k++){
      if (winningCombo[i][0] === winningArray[k]){
        if (winningCombo[i][1]=== winningArray[k+1] && winningCombo[i][2] === winningArray[k+2]){
          alert(currentPlayer + ' ' + ' is a winner');
        } else if( moveNumber === 9 && currentPlayer != winningCombo){
          console.log('we have no winner, its a draw')
        }
      }
    }
  }
}

// if no winner from winningCombo array and board is full then no winner and its a draw //

$(document).ready(function(){
  $('.box').on('click', function(e){
    var boardID = $(this).data("cell");
    board[boardID] = currentPlayer;
    $(this).addClass('cross').text(currentPlayer);
      moveNumber += 1;
      console.log(moveNumber);
      checkWinner();
      switchPlayer();
  });
});
  //   if 
  // playerOne = board[$(this).data('id')]= 'X';
  //     else
  //   board[$(this).('id')]= 'O';
  

// 1. needs to get a players first move
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


