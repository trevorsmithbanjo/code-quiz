// Variables for elements to be modified
var highScore = document.getElementById("high-score");
var timer = document.getElementById("timer");
var quizArea = document.getElementById("quiz-area");

// Variables to change state
var userScore = 0;
var count = 60;
timer.textContent = "Timer: " + count;

var questions = [
    { q: "if you run this code what do you expect to see the output?\n let x = 20;\n for(let i = 0; i< 20; i++) {\nx = x + 2}", a: ["A: 40", "B: 444", "C: 60", "D: 0"] },
];

// Buttons event listener
quizArea.addEventListener("click", function (e) {
    var target = e.target;
    console.log(target);
    console.log(e);
    if (target.matches("button") === true) {
        clearQuiz();
        quizQuestions();
        setTimer();
    }
})

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

// Quiz questions function
function quizQuestions() {
    for (i = 0; i < questions.length; i++) {
        var question = questions[i];
        var questionH2 = document.createElement("h2");
        questionH2.textContent = question.q;
        quizArea.appendChild(questionH2);

        for (j = 0; j < question.a.length; j++) {
            var answer = question.a[j];
            var answerDiv = document.createElement("div");
            var answersBtn = document.createElement("button");
            answersBtn.textContent = answer;
            answersBtn.classList.add("btn", "btn-info");
            answerDiv.append(answersBtn);
            quizArea.append(answerDiv);
            console.log(answer);
        }
    }
}

// quizStart();
quizQuestions();