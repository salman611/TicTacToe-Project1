
let board= [];
let player1= "X";
let player2= "O";
let playerturn= "X";



const winningLogic= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
];

const eachCell= document.querySelectorAll(".cell");
function startPlaying(){
 
   
    console.log("clicked");
       this.innerText = playerturn;
       switchPlayer();
    this.removeEventListener("click", startPlaying);
}

for (let i = 0; i < eachCell.length; i++){
eachCell[i].addEventListener("click",startPlaying);
}

function switchPlayer() {
    if (playerturn ==="X") {
    playerturn= "O";
    }
    else{
        playerturn= "X"; 
    }
}

 
    //console.log("restart");
    //this.value =" ";
   // this.removeEventListener("click", clickRestart);

//for (let i = 0; i < eachCell.length; i++){
//restart.addEventListener("click",clickRestart);
//}
