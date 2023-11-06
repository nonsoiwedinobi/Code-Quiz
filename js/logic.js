// DOM elements
const startButton = document.getElementById("start");
const timeDisplay = document.getElementById("time");
const questionTitle = document.getElementById("question-title");
const choices = document.getElementById("choices");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const endScreen = document.getElementById("end-screen");
const startScreen = document.getElementById("start-screen");
const questionsScreen = document.getElementById("questions");

let timer;
let time = 0;
let currentQuestionIndex = 0;
let score = 0;

// Quiz questions
const questions = [
  {
    question: "Commonly used data types DO NOT include?",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: 2,
  },
  {
    question: "The condition in an if / else statement is enclosed within _______?",
    choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctAnswer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store ______?",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: 3,
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: 2,
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
    correctAnswer: 3,
  },
];

// Start quiz function 
function startQuiz() {
  startScreen.classList.add("hide");
  questionsScreen.classList.remove("hide");
  time = 60; // Initial time (in seconds) for the quiz
  startTimer();
  showQuestion();
}

// Start quiz timer
function startTimer() {
  timer = setInterval(function () {
    time--;
    timeDisplay.textContent = time;
    if (time <= 0) {
      endGame();
    }
  }, 1000);
}

// Questions function
function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    const question = questions[currentQuestionIndex];
    questionTitle.textContent = question.question;
    choices.innerHTML = "";
    question.choices.forEach((choice, index) => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.addEventListener("click", () => {
        checkAnswer(index);
      });
      choices.appendChild(choiceButton);
    });
  } else {
    endGame();
  }
}

// Function to check answers
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestionIndex];
    if (selectedIndex === question.correctAnswer) {
      score += 20;
      document.getElementById("question-feedback").textContent = "Correct!";
    } else {
      time -= 10; // Penalty for incorrect answer
      document.getElementById("question-feedback").textContent = "Wrong!";
    }
  
    // Delay clearing the feedback to give the user a moment to see it
    setTimeout(() => {
      document.getElementById("question-feedback").textContent = "";
      currentQuestionIndex++;
      showQuestion();
    }, 1000);
  }
  
// Function to end quiz
function endGame() {
  clearInterval(timer);
  questionsScreen.classList.add("hide");
  endScreen.classList.remove("hide");
  document.getElementById("final-score").textContent = score;
}

submitButton.addEventListener("click", function () {
    console.log("Submit button clicked"); // Add this line
    const initials = initialsInput.value.trim();
  if (initials !== "") {

  }
});

startButton.addEventListener("click", startQuiz);
