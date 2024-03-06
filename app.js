// DOM
const inputForm = document.querySelector(".input-form");
const word = document.querySelector(".word");
const input = document.querySelector(".input");
const resetBtn = document.querySelector(".resetbtn");
const time = document.querySelector(".time");

// 변수
const api = ["학교", "컴퓨터", "코딩", "대상혁", "대흥민"];
let inputValue = "";
let timer = 60;
let isPlaying = false;

// 함수
const init = () => {
  getRandomText();
  setTimeInnerText();
};

const getRandomText = () => {
  word.innerText = api[Math.floor(Math.random() * 5)];
};

const updateInputValue = () => {
  inputValue = input.value;
};

const resetInputValue = () => {
  input.value = "";
};

const checkInputValue = () => {
  updateInputValue();
  inputValue === word.innerText ? console.log("같음") : console.log("다름");
};

const countdown = () => {
  setInterval(() => {
    timer--;
    setTimeInnerText();
    console.log(timer);
  }, 1000);
};

const setTimeInnerText = () => {
  time.innerText = `남은 시간: ${timer}초`;
};

const startGame = () => {
  isPlaying = true;
  countdown();
};

// 이벤트리스너
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  startGame();
  updateInputValue();
  checkInputValue();
  resetInputValue();
  getRandomText();
});

resetBtn.addEventListener("click", () => {
  isPlaying = false;
  timer = 60;
});

init();
