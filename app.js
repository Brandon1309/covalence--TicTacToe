// dom
let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#box2")
let box3 = document.querySelector("#box3")
let box4 = document.querySelector("#box4")
let box5 = document.querySelector("#box5")
let box6 = document.querySelector("#box6")
let box7 = document.querySelector("#box7")
let box8 = document.querySelector("#box8")
let box9 = document.querySelector("#box9")
let squares = document.querySelectorAll("button")
let result = document.querySelector("#result")
let resetBtn = document.querySelector("#reset-btn")

// tells whos turn it is
let turnX = true;
let turnO = false;

document.querySelector(".all-btns").addEventListener("click", (event) => {
  turns(event.target)
  console.log(event.target)
})

resetBtn.addEventListener("click", () => {
  reset();
})

// starts the game
start()
reset();

// changes turns
function turns() {
  if (turnX) {
    event.target.innerHTML = "X"
    turnX = false;
    turnO = true;
    winnerX();
    draw();

  } else if (turnO) {
    event.target.innerHTML = "O"
    turnX = true;
    turnO = false;
    winnerO();
    draw()



  } else {
    console.log("error");
  }
}

// starts the game
function start() {
  result.style.visibility = "hidden";
}

// ends the game
function endGame() {
  result.style.visibility = "visible"

}

// resets the game
function reset() {
  result.style.visibility = "hidden"
  box1.innerHTML = "&nbsp"
  box2.innerHTML = "&nbsp"
  box3.innerHTML = "&nbsp"
  box4.innerHTML = "&nbsp"
  box5.innerHTML = "&nbsp"
  box6.innerHTML = "&nbsp"
  box7.innerHTML = "&nbsp"
  box8.innerHTML = "&nbsp"
  box9.innerHTML = "&nbsp"
}

// tells if x wins
function winnerX() {
  if (box1.innerHTML.toLowerCase() === "x" && box2.innerHTML.toLowerCase() === "x" && box3.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();

    console.log("X wins")
  } else if (box1.innerHTML.toLowerCase() === "x" && box4.innerHTML.toLowerCase() === "x" && box7.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();
    console.log("X wins")
  } else if (box1.innerHTML.toLowerCase() === "x" && box5.innerHTML.toLowerCase() === "x" && box9.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();
    console.log("X wins")
  } else if (box1.innerHTML.toLowerCase() === "x" && box5.innerHTML.toLowerCase() === "x" && box9.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();
    console.log("X wins")
  } else if (box2.innerHTML.toLowerCase() === "x" && box5.innerHTML.toLowerCase() === "x" && box8.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();
    console.log("X wins")
  } else if (box3.innerHTML.toLowerCase() === "x" && box5.innerHTML.toLowerCase() === "x" && box7.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();
    console.log("X wins")
  } else if (box3.innerHTML.toLowerCase() === "x" && box6.innerHTML.toLowerCase() === "x" && box9.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();
    console.log("X wins")
  } else if (box4.innerHTML.toLowerCase() === "x" && box5.innerHTML.toLowerCase() === "x" && box6.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();
    console.log("X wins")
  } else if (box1.innerHTML.toLowerCase() === "x" && box5.innerHTML.toLowerCase() === "x" && box9.innerHTML.toLowerCase() === "x") {
    result.innerHTML = "X Wins!";
    endGame();
    console.log("X wins")
  }
}
// tells if O wins
function winnerO() {
  if (box1.innerHTML.toLowerCase() === "o" && box2.innerHTML.toLowerCase() === "o" && box3.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  } else if (box1.innerHTML.toLowerCase() === "o" && box4.innerHTML.toLowerCase() === "o" && box7.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  } else if (box1.innerHTML.toLowerCase() === "o" && box5.innerHTML.toLowerCase() === "o" && box9.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  } else if (box1.innerHTML.toLowerCase() === "o" && box5.innerHTML.toLowerCase() === "o" && box9.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  } else if (box2.innerHTML.toLowerCase() === "o" && box5.innerHTML.toLowerCase() === "o" && box8.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  } else if (box3.innerHTML.toLowerCase() === "o" && box5.innerHTML.toLowerCase() === "o" && box7.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  } else if (box3.innerHTML.toLowerCase() === "o" && box6.innerHTML.toLowerCase() === "o" && box9.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  } else if (box4.innerHTML.toLowerCase() === "o" && box5.innerHTML.toLowerCase() === "o" && box6.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  } else if (box1.innerHTML.toLowerCase() === "o" && box5.innerHTML.toLowerCase() === "o" && box9.innerHTML.toLowerCase() === "o") {
    result.innerHTML = "O Wins!";
    endGame();
    console.log("O wins")
  }
}

// tells if draw
function draw() {
  console.log(box1.innerText)

  if ((box1.innerText === "X" || box1.innerText === "O") && (box2.innerText === "X" || box2.innerText === "O") && (box3.innerText === "X" || box3.innerText === "O") && (box4.innerText === "X" || box4.innerText === "O") && (box5.innerText === "X" || box5.innerText === "O") && (box6.innerText === "X" || box6.innerText === "O") && (box7.innerText === "X" || box7.innerText === "O") && (box8.innerText === "X" || box8.innerText === "O") && (box9.innerText === "X" || box9.innerText === "O")) {
    result.innerHTML = "Draw!"
    endGame();
    console.log("Draw")
  } else {
    console.log()
  }
}