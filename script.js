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
    // quizTitle.hide();
    quizRounds();
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

// Quiz Rounds function
function quizRounds() {
    for (i = 0; i < questions.length; i++) {
        var question = questions[i];
        quizTitle.text(question.q);

        for (j = 0; j < question.a.length; j++) {
            var answer = question.a[j];
            var answerBtn = $(`<div><button class="btn btn-info p-2 mb-2" id="answerBtn" value="${answer}">${answer}</button></div>`)
            quizArea.append(answerBtn);
        }
    }
    quizArea.on("click", function () {
        console.log(answerBtn.value);
    })
}