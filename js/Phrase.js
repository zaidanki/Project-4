class Phrase {
  constructor() {}
  addPhraseToDisplay(word) { // this method appends the word that we would want to guess to the HTML
    const divUl = document.querySelector("#phrase ul");
    const usedWord = word;
    const wordString = usedWord.split("");
    wordString.forEach(letter => {
      const newLi = document.createElement("li");
      newLi.textContent = letter;
      if (newLi.textContent === " ") {
        newLi.className = "hide space";
      } else {
        newLi.className = "letter";
      }
      divUl.appendChild(newLi);
    });
  }
  checkLetter(letter) { // this method checks if the letter occurs in the word that we appended above and returns the letter and all times it apears
    const divUlC = document.querySelector("#phrase ul").children;
    const arr = Array.from(divUlC);
    const foundLetter = arr.filter(e => {
      return e.textContent.toUpperCase() === letter.toUpperCase();
    });
    return foundLetter;
  }

  showMatchedLetter(letter) { // this method gives the class "show" to the letters that match
    if (this.checkLetter(letter).length > 0) {
      this.checkLetter(letter).forEach(e => (e.className = "show"));
    }
  }
}
