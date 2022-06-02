/* Selects the game container div so we can render the board in it */
const board = document.querySelector(".game-container") as HTMLElement;

const button = document.querySelector(`.button`) as HTMLElement;

/* turn is alwasy one of these  */
type Turn = "X" | "O" | "";

/* tracks whos turn is it */
let turn: Turn = "X";

/* Listens whenever a box on the board is clicked */
function listenBoard(): void {
  board.addEventListener("click", runGame);
  GamepadButton.addE
}

/* main method */
function main(): void {
  createBoard();
  listenBoard();
}



/* Lets player switch taking turns when clicking the boxes  */
function runGame(e: Event): void {
  /* gets the id of the box that is clicked on */
  const boxId: string | null = (<HTMLElement>e.target).id;
  if (boxId === null) return;
  /* Gets the box that was clicked thruough its boxID */
  const box: HTMLElement | null = document.querySelector(`#${boxId}`);
  if (box === null || box.textContent !== "") return;
  box.textContent = turn;
  const winner: boolean = checkWinner();
  /* after the player clicked the box we should switch the player */
  if(!winner) switchPlayer();
  else {
      endGame();
  }
}



/* if there is a winner run this method to reset everything */
function endGame(): void {
    board.removeEventListener('click', runGame);
    button.addEventListener('click', resetGame);
}


function resetGame(): void {

}



function checkWinner(): boolean {
    /* get the content of all the boxes */
    const boxes: Array<String> = getBoxes();
    /* This is a brute force try to come up with a better solution  */
    return (
        (boxes[0] === boxes[1] && boxes[1] === boxes[2] && boxes[0] !== "") ||
        (boxes[3] === boxes[4] && boxes[4] === boxes[5] && boxes[3] !== "") ||
        (boxes[6] === boxes[7] && boxes[7] === boxes[8] && boxes[6] !== "") ||
        (boxes[0] === boxes[4] && boxes[4] === boxes[8] && boxes[0] !== "") ||
        (boxes[2] === boxes[4] && boxes[4] === boxes[6] && boxes[2] !== "") ||
        (boxes[1] === boxes[4] && boxes[4] === boxes[7] && boxes[1] !== "") ||
        (boxes[0] === boxes[3] && boxes[3] === boxes[6] && boxes[0] !== "") ||
        (boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] !== "") 
    )
}


/* gets all the boxes on the bored when we need to check the winner */
function getBoxes(): Array<String> {

    const boxContent: Array<String> = [];
    for(let i=0; i<9; i++) {
        /* get the html elem with the id i */
        const box = document.querySelector(`#box-${i}`) as HTMLElement;
        /* get the content of the box */
        const boxContentValue: String | null = box.textContent;
        /* error handle if null else push it into the array */
        if(boxContentValue === null) boxContent.push("")
        else {
            boxContent.push(boxContentValue);
        }
    }

    return boxContent;
}

/* switchs between x and o depending on who clicked last */
function switchPlayer(): void {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
}

/* creates the whole board using makeBox() */
function createBoard(): void {
  /* tic tac toe has 9 boxes */
  for (let i = 0; i < 9; i++) makeBox(i);
}

/* makes the induvdual boxes  */
function makeBox(i: number): void {
  const box: HTMLDivElement = document.createElement("div");
  box.className = "box";
  box.id = `box-${i}`;
  box.textContent = "";
  /* appends a div with box in it to the board */
  board.append(box);
}

main();
