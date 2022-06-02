/* Selects the game container div so we can render the board in it */ const board = document.querySelector(".game-container");
const button = document.querySelector(`.button`);
/* tracks whos turn is it */ let turn = "X";
/* Listens whenever a box on the board is clicked */ function listenBoard() {
    board.addEventListener("click", runGame);
    GamepadButton.addE;
}
/* main method */ function main() {
    createBoard();
    listenBoard();
}
/* Lets player switch taking turns when clicking the boxes  */ function runGame(e) {
    /* gets the id of the box that is clicked on */ const boxId = e.target.id;
    if (boxId === null) return;
    /* Gets the box that was clicked thruough its boxID */ const box = document.querySelector(`#${boxId}`);
    if (box === null || box.textContent !== "") return;
    box.textContent = turn;
    const winner = checkWinner();
    /* after the player clicked the box we should switch the player */ if (!winner) switchPlayer();
    else endGame();
}
/* if there is a winner run this method to reset everything */ function endGame() {
    board.removeEventListener("click", runGame);
    button.addEventListener("click", resetGame);
}
function resetGame() {}
function checkWinner() {
    /* get the content of all the boxes */ const boxes = getBoxes();
    /* This is a brute force try to come up with a better solution  */ return boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] !== "" || boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] !== "" || boxes[6] === boxes[7] && boxes[7] === boxes[8] && boxes[6] !== "" || boxes[0] === boxes[4] && boxes[4] === boxes[8] && boxes[0] !== "" || boxes[2] === boxes[4] && boxes[4] === boxes[6] && boxes[2] !== "" || boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] !== "" || boxes[0] === boxes[3] && boxes[3] === boxes[6] && boxes[0] !== "" || boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] !== "";
}
/* gets all the boxes on the bored when we need to check the winner */ function getBoxes() {
    const boxContent = [];
    for(let i = 0; i < 9; i++){
        /* get the html elem with the id i */ const box = document.querySelector(`#box-${i}`);
        /* get the content of the box */ const boxContentValue = box.textContent;
        /* error handle if null else push it into the array */ if (boxContentValue === null) boxContent.push("");
        else boxContent.push(boxContentValue);
    }
    return boxContent;
}
/* switchs between x and o depending on who clicked last */ function switchPlayer() {
    if (turn === "X") turn = "O";
    else turn = "X";
}
/* creates the whole board using makeBox() */ function createBoard() {
    /* tic tac toe has 9 boxes */ for(let i = 0; i < 9; i++)makeBox(i);
}
/* makes the induvdual boxes  */ function makeBox(i) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box-${i}`;
    box.textContent = "";
    /* appends a div with box in it to the board */ board.append(box);
}
main();

//# sourceMappingURL=index.dac0be78.js.map
