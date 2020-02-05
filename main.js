// Declare the palyers and assign X to start the first move 
let playerTurn = "X";
// Declare count to count number of clicks 
let count = 0;



// Declare the winning logic to ease the problem 
const winningLogic = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
];

// Use if statement to detemine the winner and use the innerText to determine the value of each div
function winner() {

    //X
    if (eachCell[0].innerText === "X" && eachCell[1].innerText === "X" && eachCell[2].innerText === "X") {
        message.innerText = ("X wins");
        // excute the function endGame to remove event listner from each cell after if there is a winner
        endGame();
        // play sound effect whem there is a winner
        document.getElementById("click2").play();
    } else if (eachCell[3].innerText === "X" && eachCell[4].innerText === "X" && eachCell[5].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[6].innerText === "X" && eachCell[7].innerText === "X" && eachCell[8].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[0].innerText === "X" && eachCell[3].innerText === "X" && eachCell[6].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[1].innerText === "X" && eachCell[4].innerText === "X" && eachCell[7].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[2].innerText === "X" && eachCell[5].innerText === "X" && eachCell[8].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[0].innerText === "X" && eachCell[4].innerText === "X" && eachCell[8].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[6].innerText === "X" && eachCell[4].innerText === "X" && eachCell[2].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
        document.getElementById("click2").play();
    }

    //O
    else if (eachCell[0].innerText === "O" && eachCell[1].innerText === "O" && eachCell[2].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[3].innerText === "O" && eachCell[4].innerText === "O" && eachCell[5].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[6].innerText === "O" && eachCell[7].innerText === "O" && eachCell[8].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[0].innerText === "O" && eachCell[3].innerText === "O" && eachCell[6].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[1].innerText === "O" && eachCell[4].innerText === "O" && eachCell[7].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[2].innerText === "O" && eachCell[5].innerText === "O" && eachCell[8].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[0].innerText === "O" && eachCell[4].innerText === "O" && eachCell[8].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
        document.getElementById("click2").play();
    } else if (eachCell[6].innerText === "O" && eachCell[4].innerText === "O" && eachCell[2].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
        document.getElementById("click2").play();
        // if the count =9 it means all cells are full and no winner
    } else {
        if (count === 9) {
            message.innerText = "It's a tie, try again!";
        }
    }
}


const eachCell = document.querySelectorAll(".cell");

/*Declare a function to enter either X or O in each cell, count how many times the grid has clicked,
 swith between players, determine the winner, and last thing we remove the event listener.
The function will excute till we call it.

*/
function startPlaying() {

    console.log("clicked");
    this.innerText = playerTurn;
    // play sound effect when the players click 
    document.getElementById("click").play();
    count++;
    switchPlayer();
    winner();
    this.removeEventListener("click", startPlaying);
}

// loop over each cell in the grid and add Event Listener to each, and then call the function.
for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener("click", startPlaying);
}

//Declare function to switch bewteen players if X switch to O, vice versa. push massages for each player turn.
function switchPlayer() {
    if (playerTurn === "X") {
        playerTurn = "O";
        message.innerText = ("It's " + playerTurn + "'s turn");
    } else {
        playerTurn = "X";
        message.innerText = ("It's " + playerTurn + "'s turn");
    }
}

/*Declare function to restart the game and start over. loop over each cell and remove the innerText,
add again add Event Listener to each cell, reset the player to initial player,
reset the massage to the initial massage, and reset the count to ZERO.
*/

function restartGame() {
    console.log("restart");
    // play sound effect when click on start over button 
    document.getElementById("click").play();
    for (let i = 0; i < eachCell.length; i++) {
        eachCell[i].innerText = "";
        eachCell[i].addEventListener("click", startPlaying);
        message.innerText = 'Start playing with X!';
        playerTurn = "X";
        count = 0
    }
}

/* Target the start over button and add addEventListener to
 it when it's clicked and call the restartGame function to start over
 */

document.querySelector("#restart").addEventListener("click", restartGame);

/*Declare the end game function to end the game when there is a winner by removing 
the add event listener to each cell
*/

function endGame() {
    console.log("end game function")
    for (let i = 0; i < eachCell.length; i++) {
        eachCell[i].removeEventListener("click", startPlaying);

    }
}