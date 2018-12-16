const phrasez = new Phrase(); // creating Phrase
const game = new Game(); // creaing game
let = keysPushed = [] // creating array for pushed keys

function markButton() {
  const board = document.querySelector("#qwerty");
  board.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
      e.target.setAttribute("disabled", "");
      game.handleInteraction(e.target.textContent);
      game.checkForWin();
    }
  }); // first part of this code is for clicking on the buttons with a mouse, if that happens then game.handleInteraction and game.checkForWin happens

  window.addEventListener("keydown", e => {
    if (/^([a-z])/i.test(e.key)) {
      keysPushed.push(e.key);
      const keydn = e.key;
      console.log(keysPushed);
      const newkey = keysPushed.filter(e => e === keydn).length;
      console.log("newkey" + newkey);
      if (newkey > 1) {
        console.log("hi");
      } else {
        game.handleInteraction(e.key);
        game.checkForWin();
      }
    } else {
      alert('we only take letters a-z')
    }
  }); // while this part of the code pushes any keys pushed by the keyboard into the array, and would not allow for the same key to be used more than once, and then game.handleInteraction + game.checkForWin occurs
}

function resetDisplay() { // removes the starting display
  const startBtn = document.querySelector("#overlay button");
  startBtn.addEventListener("click", () => {
    const bud = document.querySelector("#overlay").remove();

    game.getRandomPhrase();
    console.log("hi");
  });
}

resetDisplay();// have to run it to make sure that the events are attached to buttons
markButton(); // run it to make sure events are attached.
