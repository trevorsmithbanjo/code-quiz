// Variables for elements to be modified
var highScore = document.getElementById("high-score");
var timer = document.getElementById("timer");
var quizArea = document.getElementById("quiz-area");

// Variables to change state
var userScore = 0;
var count = 60;
timer.textContent = "Timer: " + count;

// Function to set timer
function setTimer() {
    var timerInterval = setInterval(function () {
        count--;
        timer.textContent = "Timer: " + count;

        if (count == 0) {
            clearInterval(timerInterval);
        }
    }, 1000)
}

// Funcion to populate quiz area
function quizStart() {
    var codeH1 = document.createElement("h1");
    codeH1.textContent = "Code Quiz Challenge"
    quizArea.appendChild(codeH1);
    var startBtn = document.createElement("button");
    startBtn.textContent = "Start Quiz";
    startBtn.classList.add("btn", "btn-info");
    quizArea.appendChild(startBtn);
}

// Clear quiz area function
function clearQuiz() {
    var child = quizArea.lastElementChild;
    while (child) {
        quizArea.removeChild(child);
        child = quizArea.lastElementChild;
    }
}

// Buttons event listener
quizArea.addEventListener("click", function (e) {
    var target = e.target;
    console.log(target);
    console.log(e);
    if (target.matches("button") === true) {
        clearQuiz();
        setTimer();
    }
})

quizStart();