let boxes = document.querySelectorAll(".box");
let row = document.querySelectorAll(".row");
let moves = 0;
let currentPlayer = "X";

let w = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8]
];

for (let box of boxes) box.addEventListener('click', cellClick)

function cellClick(e) {
    let box = e.target
    moves++;
    box.textContent = currentPlayer;
    if (moves > 9) {
        p();
        //alert("It was a tie!")
        delay();
    } else if (moves > 2) {
        checkingCells();
    }
    togglePlayer();

};

function togglePlayer() { //player turn
    if (currentPlayer === "X") {
        currentPlayer = "O"
    } else {
        currentPlayer = "X"
    }
}

function checkingCells() {
    for (i = 0; i < w.length; i++) {
        let combo = w[i];
        let sum = 0;
        for (j = 0; j < combo.length; j++) {
            if (boxes[combo[j]].textContent === currentPlayer) {
                sum++;
                console.log(boxes[combo[j]])
            }
            if (sum === 3) {
                y();
                delay();
            }
        }
    }
}

function reset() {
    for (i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = " "
        currentPlayer = 'X';
        moves = 0;
    }
}

function y() {
    t = setTimeout(alert, 1000, currentPlayer + " wins!")
}

function delay() {
    n = setTimeout(reset, 6000);
}

function p(){
    m = setTimeout(alert, 3000,"its a draw")
}











