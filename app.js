// DOM
const inputForm = document.querySelector(".input-form");
const word = document.querySelector(".word");
const input = document.querySelector(".input");
const resetBtn = document.querySelector(".resetbtn");
const time = document.querySelector(".time");
const score = document.querySelector(".score");

// 변수
const api = [
  "대리아",
  "대황슼",
  "프로그래머스",
  "대상혁",
  "대흥민",
  "따이후앙쑤웈",
];
const apiLength = api.length;
let inputValue;
let timer;
let isPlaying;
let setScore;

// 함수
const init = () => {
  inputValue = "";
  timer = 30;
  isPlaying = false;
  setScore = 0;
  getRandomText();
  setTimeInnerText();
  renderScore();
};

const getRandomText = () => {
  word.innerText = api[Math.floor(Math.random() * apiLength)];
};

const setTimeInnerText = () => {
  time.innerText = `남은 시간: ${timer}초`;
};

const renderScore = () => {
  score.innerText = `점수: ${setScore}`;
};

const startGame = () => {
  return isPlaying === false ? (isPlaying = true && countdown()) : null;
};

const stopGame = () => {
  input.value = "끝났습니다.";
  input.disabled = true;
};

const updateInputValue = () => {
  inputValue = input.value;
};

const resetInputValue = () => {
  input.value = "";
};

const checkInputValue = () => {
  updateInputValue();
  inputValue === word.innerText ? setScore++ : null;
  renderScore();
};

const countdown = () => {
  const intervalId = setInterval(() => {
    timer--;
    setTimeInnerText();
    console.log(timer);
    if (timer === 0) {
      clearInterval(intervalId);
      stopGame();
    }
  }, 1000);
};

// 이벤트리스너
init();

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  startGame();
  updateInputValue();
  checkInputValue();
  resetInputValue();
  getRandomText();
});

resetBtn.addEventListener("click", () => {
  input.disabled = false;
  resetInputValue();
  init();
});
