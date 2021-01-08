$(document).ready(function () {

    // Variables for elements to be modified
    var highScore = $("#high-score");
    var timer = $("#timer");
    var quizArea = $("#quiz-area");
    var quizTitle = $("#quiz-title");
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
        {
            q: "This is another question",
            a: ["A", "B", "C", "D"],
            c: "A"
        },
    ];

    // Start quiz event
    startQuiz.on("click", function (event) {
        event.preventDefault();
        setTimer();
        quizArea.empty();
        quizRounds();
    })

    // Function to set timer
    function setTimer() {
        var timerInterval = setInterval(function () {
            count--;
            timer.text("Timer: " + count);

            if (count == 0) {
                clearInterval(timerInterval);
            }
        }, 1000)
    }

    // Quiz Rounds function
    function quizRounds() {
        var quizQuestion = $("<h1>");
        for (i = 0; i < questions.length; i++) {
            var question = questions[i];
            quizQuestion.text(question.q);
            quizArea.append(quizQuestion);

            for (j = 0; j < question.a.length; j++) {
                var answer = question.a[j];
                var answerBtn = $(`<div><button class="btn btn-info p-2 mb-2" id="answerBtn" value="${answer}">${answer}</button></div>`)
                quizArea.append(answerBtn);
            }
        }
        quizArea.on("click", function (event) {
            event.preventDefault();
            var btnClick = event.target.value;
            console.log(question.c);
            console.log(btnClick);

            // Test answer function
            function testAnswer() {
                if (btnClick === question.c) {
                    userScore++;
                } else if (btnClick !== question.c) {
                    count - 20;
                } else {
                    return;
                }
            }
        })
    }

})