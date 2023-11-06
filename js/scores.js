const highscoresList = document.getElementById("highscores");
const clearButton = document.getElementById("clear");

// Function to load and display high scores
function loadHighscores() {
  const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  highscoresList.innerHTML = "";
  highscores.forEach((score, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
    highscoresList.appendChild(li);
  });
}

// Load high scores when the highscores page loads
loadHighscores();

// Clear high scores
clearButton.addEventListener("click", function () {
  localStorage.removeItem("highscores");
  loadHighscores();
});
