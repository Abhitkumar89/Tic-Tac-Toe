// let userNum=prompt("Guess the number: ");
// let gameNum=25;
// while(userNum!=gameNum){
//      userNum=prompt("ohh you enter the wrong number-> Guess the number again : ");

// }
// console.log("you enter the correct number->>");

//function to find the count of vovels in a sting
// function CounbtVowels(str){
//      let count=0;
//      for(const char of str){
//           if(char==="a"||char=== "e" || char ==="i"||char === "o"|| char==="u"){
//                count++;
//           }
//      }
//      console.log(count);
// }

// let arrowFunction=(str)=>{
//      let count=0;
//      for(const char of str){
//           if(char==="a"||char=== "e" || char ==="i"||char === "o"|| char==="u"){
//                count++;
//           }
//      }
//      console.log(count);
// }

//AAm zindagi
// let divs=document.querySelectorAll(".mydiv");
// divs[0].innerText="Abhit Kumar Singh";
// divs[1].innerText="Aman Kumar Singh";
// divs[2].innerText="Aashi Kumari Singh";


//pro level
// let idx=1;
// for(div of divs){
//      div.innerText=`new unique value is ${idx}`;
//      idx++;
// }

// let newBtn=document.createElement("button");
// newBtn.innerText="click me!!";
// newBtn.style.backgroundColor="red";
// newBtn.style.color="white";
// let x=document.querySelector("body");
// x.prepend(newBtn);


// //question 2
// let para=document.querySelector("p");
// para.classList.add("newClass");

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", () => {
//     console.log("button was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// });

// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("you are over the box");
// };

// let modeBtn=document.querySelector("#mode");
// let body=document.querySelector("body");
// let currMode="light";
// modeBtn.addEventListener("click",()=>{
//     if (currMode === "light") {
//         body.classList.remove("light"); // Remove light mode class
//         body.classList.add("dark");
//         currMode = "dark";
//     } else {
//         body.classList.remove("dark"); // Remove dark mode class
//         body.classList.add("light");
//         currMode = "light";
//     }
//     // console.log(currMode);

// });



//Tic Tac Toe
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let moves = 0; // to keep track of the number of moves
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    moves = 0; // reset moves counter
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((b) => {
    b.addEventListener("click", () => {
        if (b.innerText === "") { // Only make a move if the box is empty
            if (turn0) {
                b.innerHTML = "0";
                b.style.color = "blue"; // Color for Player 1
                turn0 = false;
            } else {
                b.innerHTML = "X";
                b.style.color = "red"; // Color for Player 2
                turn0 = true;
            }
            b.disabled = true;
            moves++;
            checkWinner();
        }
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.color = ""; // Reset color
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} is the winner.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const showDrawMessage = () => {
    msg.innerText = `No player wins. Please start a new game.`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const checkWinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return; // exit the function if a winner is found
            }
        }
    }
    if (moves === 9) {
        showDrawMessage();
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
  