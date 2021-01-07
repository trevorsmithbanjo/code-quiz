// Variables for elements to be modified
var highScore = $("#high-score");
var timer = $("#timer");
var quizArea = $("#quiz-area");
var quizTitle = $("#quiz-title");
var quizQuestion = $("#quiz-question");
var startQuiz = $("#start-quiz");

// Variables to change state
var userScore = 0;
var count = 60;
timer.textContent = "Timer: " + count;

// object to hold questions
var questions = [
    {
        q: "This is a question",
        a: ["A", "B", "C", "D"],
        c: "C"
    },
];

// Start quiz
startQuiz.on("click", function () {
    startQuiz.hide();
    quizTitle.hide();
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