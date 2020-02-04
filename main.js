let playerTurn = "X";
let count = 0;




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

function winner() {

    //X
    if (eachCell[0].innerText === "X" && eachCell[1].innerText === "X" && eachCell[2].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
    } else if (eachCell[3].innerText === "X" && eachCell[4].innerText === "X" && eachCell[5].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
    } else if (eachCell[6].innerText === "X" && eachCell[7].innerText === "X" && eachCell[8].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
    } else if (eachCell[0].innerText === "X" && eachCell[3].innerText === "X" && eachCell[6].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
    } else if (eachCell[1].innerText === "X" && eachCell[4].innerText === "X" && eachCell[7].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
    } else if (eachCell[2].innerText === "X" && eachCell[5].innerText === "X" && eachCell[8].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
    } else if (eachCell[0].innerText === "X" && eachCell[4].innerText === "X" && eachCell[8].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
    } else if (eachCell[6].innerText === "X" && eachCell[4].innerText === "X" && eachCell[2].innerText === "X") {
        message.innerText = ("X wins");
        endGame();
    }

    //O
    else if (eachCell[0].innerText === "O" && eachCell[1].innerText === "O" && eachCell[2].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
    } else if (eachCell[3].innerText === "O" && eachCell[4].innerText === "O" && eachCell[5].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
    } else if (eachCell[6].innerText === "O" && eachCell[7].innerText === "O" && eachCell[8].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
    } else if (eachCell[0].innerText === "O" && eachCell[3].innerText === "O" && eachCell[6].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
    } else if (eachCell[1].innerText === "O" && eachCell[4].innerText === "O" && eachCell[7].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
    } else if (eachCell[2].innerText === "O" && eachCell[5].innerText === "O" && eachCell[8].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
    } else if (eachCell[0].innerText === "O" && eachCell[4].innerText === "O" && eachCell[8].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
    } else if (eachCell[6].innerText === "O" && eachCell[4].innerText === "O" && eachCell[2].innerText === "O") {
        message.innerText = ("O wins");
        endGame();
    } else {
        if (count === 9) {
            message.innerText = "It's a tie, try again!";
        }
    }
}


const eachCell = document.querySelectorAll(".cell");

function startPlaying() {

    console.log("clicked");
    this.innerText = playerTurn;
    count++;
    switchPlayer();
    winner();

    this.removeEventListener("click", startPlaying);
}


for (let i = 0; i < eachCell.length; i++) {
    eachCell[i].addEventListener("click", startPlaying);
}


function switchPlayer() {
    if (playerTurn === "X") {
        playerTurn = "O";
        message.innerText = ("It's " + playerTurn + "'s turn");
    } else {
        playerTurn = "X";
        message.innerText = ("It's " + playerTurn + "'s turn");
    }
}

function restartGame() {
    console.log("restart");
    for (let i = 0; i < eachCell.length; i++) {
        eachCell[i].innerText = "";
        eachCell[i].addEventListener("click", startPlaying);
        message.innerText = 'Start playing with X!';
        playerTurn = "X";
        count = 0
    }
}

document.querySelector("#restart").addEventListener("click", restartGame);

function endGame() {
    console.log("end game function")
    for (let i = 0; i < eachCell.length; i++) {
        eachCell[i].removeEventListener("click", startPlaying);

    }
}