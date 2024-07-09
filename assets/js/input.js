String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substring(0, index) +
    replacement +
    this.substring(index + replacement.length)
  );
};

const myBtn = document.getElementById("myBtn");
const modal = document.getElementById("modal");
const myBtnY = document.querySelector("#myBtnY");
const myBtnN = document.querySelector("#myBtnN");
const goodbyeMessage = document.querySelector("#goodbyeMessage");
const gameOverMessage = document.querySelector("#gameOverMessage");
const hangImg = document.querySelector("#hangImg");
const okBtn = document.querySelector("#okBtn");

let wrongAnswer = 0;
let correctAnswer = 0;
const hangmanImages = document.querySelector(".hangImagesDiv img");
const guessCount = document.querySelector(".guessCount");
const maxWrongGuess = 6;

function checkAnswer(letter) {
  if (!isGameStart) {
    return;
  }

  let wordIndex = randomWord.indexOf(letter.toLowerCase());
  console.log(letter);
  console.log(wordIndex);

  console.log(randomWord);
  if (wordIndex == -1) {
    console.log("WRONG ANSWER ADDED");
    if (wrongAnswer >= maxWrongGuess) {
      gameover();
    } else {
      wrongAnswer++;
      guessCount.textContent = `${wrongAnswer} / ${maxWrongGuess}`;
      changeImage();
    }
  } else {
    underline.childNodes[wordIndex].innerHTML = letter;
    randomWord = randomWord.replaceAt(wordIndex, "|");
    correctAnswer++;
    if (correctAnswer >= randomWord.length) {
      selectWord();
    }
  }
}

function changeImage() {
  hangImg.setAttribute("src", `./assets/img/hangman-${wrongAnswer}.svg`);
}

function gameover() {
  modal.classList.replace("hidden", "fixed");
}

const keyboardParentElement = document.querySelector(".button-parent");

for (let i = 65; i <= 90; i++) {
  const button = document.createElement("button");
  button.classList.add(
    "bg-purple-300",
    "w-10",
    "h-10",
    "text-xl",
    "rounded-xl",
    "p-9",
    "flex",
    "items-center",
    "justify-center",
    "hover:bg-purple-500",
    "duration-500"
  );
  const character = String.fromCharCode(i);
  button.textContent = character;
  button.addEventListener("click", function () {
    checkAnswer(character);
  });
  keyboardParentElement.appendChild(button);
}

myBtnY.addEventListener("click", function () {
  modal.classList.replace("fixed", "hidden");
  selectWord();
});

okBtn.addEventListener("click", function () {
  goodbyeMessage.classList.replace("fixed", "hidden");
  modal.classList.replace("fixed", "hidden");
});

myBtnN.addEventListener("click", function () {
  gameOverMessage.classList.add("hidden");
  goodbyeMessage.classList.replace("hidden", "fixed");
  isGameStart = false;
  myBtn.classList.remove("hidden");
});

let randomWord = "";
let isGameStart = false;

function selectWord() {
  const random = wordList[Math.floor(Math.random() * wordList.length)];
  randomWord = random.word;

  document.querySelector(".hint").textContent = random.hint;

  const underline = document.getElementById("underline");
  underline.innerHTML = "";
  for (i = 0; i < randomWord.length; i++) {
    const span = document.createElement("span");
    underline.appendChild(span);
    span.textContent = "___";
    span.classList.add("text-3xl", "font-extrabold");
  }
  wrongAnswer = 0;
  changeImage();
  correctAnswer = 0;
  console.log(randomWord);
}

myBtn.addEventListener("click", function () {
  selectWord();

  myBtn.classList.add("hidden");
  isGameStart = true;
});
