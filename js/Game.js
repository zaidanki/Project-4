class Game {
  constructor() {
    this.missed = 0; // no idea why we have the "missed but it is required"
    this.phrases = [
      "Eat your fruit",
      "touch down",
      "keep an eye on",
      "I like coding",
      "I enjoy this",
      "is five enough",
      "maybe six"
    ]; //phrases we are using
  }
  getRandomPhrase() {
    const randNum = Math.floor(Math.random() * this.phrases.length); //randomly retrieves one of the phrases stored in phrases array
    phrasez.addPhraseToDisplay(this.phrases[randNum]);
  }
  handleInteraction(element) {
    let letter = "";
    letter = element; //checks to see if the button or keypress clicked by player matches letter in phrases
    if (phrasez.checkLetter(letter).length > 0) {
      phrasez.showMatchedLetter(letter);
    } else {
      game.removeLife(); // if not it removes life
    }
  }
  removeLife() {
    const scores = document.querySelector("#scoreboard ol").children;
    const arr = Array.from(scores);
    arr.pop().remove();
    this.missed++;
    console.log(arr.length);
    if (arr.length <= 0) { // remove life by popping it out and removing it
      game.gameOver();
    }
  }

  checkForWin() { // this code is kind of repeated for the gameOver as well because its the same state but depends if life > 0 or not when the word is complete but the instruction wanted us to make two of them instead of one so thats why i did both.
    let arr = Array.from(document.querySelector("#phrase ul").children).filter(
      e => e.className === "letter"
    ); // over here we have a filter of classname "letter" and everytime checkForWin is called it activates (only when a correct letter is pressed), so arr.length will keep decreasing
    if (arr.length <= 0) { // to get the exceeds i have put on these code where i append a new page and remove it when the button is pressed.
      const bigDiv = document.createElement("div");
      bigDiv.setAttribute("class", "start");
      bigDiv.setAttribute("id", "startOver");
      const loseTitle = document.createElement("h2");
      loseTitle.setAttribute("class", "title");
      loseTitle.textContent = "You have Won!";
      bigDiv.append(loseTitle);
      const resetBtn = document.createElement("button");
      resetBtn.setAttribute("id", "resetbtn");
      resetBtn.textContent = "Start Over!";
      bigDiv.append(resetBtn);
      const body = document.querySelector(".main-container");
      body.prepend(bigDiv);
      resetBtn.addEventListener("click", () => {
        const guessed = Array.from(document.querySelectorAll("#phrase li"));// button is pressed, resets page + life + keyspushed(which i will explain on the app.js)
        for (let i = 0; i < guessed.length; ) {
          guessed.pop().remove();
        }

        this.getRandomPhrase(); // gets a new getRandomPhrase after button is pressed
        bigDiv.remove(); // removes the overlay
        keysPushed = []; // resets keys pushed
        const boardz = Array.from(document.querySelector("#qwerty").children);
        boardz.forEach(e =>
          Array.from(e.children).forEach(z => (z.disabled = false))
        );
        const scores = document.querySelector("#scoreboard ol").children;
        const arr = Array.from(scores);
        var heartol = document.querySelector("#scoreboard ol");
        if (arr.length < 5) {
          for (let i = 0; i < 5 - arr.length; i++) { // appends all lost hearts from last game
            var heartLi = document.createElement("li");
            var heartImg = document.createElement("IMG");
            heartImg.setAttribute("src", "images/liveHeart.png");
            heartImg.setAttribute("alt", "Heart Icon");
            heartImg.setAttribute("height", "35");
            heartImg.setAttribute("width", "30");
            heartLi.appendChild(heartImg);
            heartol.appendChild(heartLi);
          }
        }
      });
    }
    //checks for win
  }
  gameOver() { // this code is VERY similar to the one above it as it is required (i think having an if statement in the above one would make for an easier time)
    const bigDiv = document.createElement("div");
    bigDiv.setAttribute("class", "start");
    bigDiv.setAttribute("id", "startOver");
    const loseTitle = document.createElement("h2");
    loseTitle.setAttribute("class", "title");
    loseTitle.textContent = "You have Lost!";
    bigDiv.append(loseTitle);
    const resetBtn = document.createElement("button");
    resetBtn.setAttribute("id", "resetbtn");
    resetBtn.textContent = "Start Over!";
    bigDiv.append(resetBtn);
    const body = document.querySelector(".main-container");
    body.prepend(bigDiv);
    resetBtn.addEventListener("click", () => {
      const guessed = Array.from(document.querySelectorAll("#phrase li"));
      for (let i = 0; i < guessed.length; ) {
        guessed.pop().remove();
      }
      this.getRandomPhrase();
      bigDiv.remove();
      keysPushed = [];
      const boardz = Array.from(document.querySelector("#qwerty").children);
      boardz.forEach(e =>
        Array.from(e.children).forEach(z => (z.disabled = false))
      );
      const scores = document.querySelector("#scoreboard ol").children;
      const arr = Array.from(scores);
      var heartol = document.querySelector("#scoreboard ol");
      for (let i = 0; i < 5; i++) {
        var heartLi = document.createElement("li");
        var heartImg = document.createElement("IMG");
        heartImg.setAttribute("src", "images/liveHeart.png");
        heartImg.setAttribute("alt", "Heart Icon");
        heartImg.setAttribute("height", "35");
        heartImg.setAttribute("width", "30");
        heartLi.appendChild(heartImg);
        heartol.appendChild(heartLi);
      }
    });
  }
  startGame() {
    addPhraseToDisplay(getRandomPhrase());
  }
}
