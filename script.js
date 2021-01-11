$(document).ready(function () {

    // Variables for elements to be modified
    var highScore = $("#high-score");
    var timer = $("#timer");
    var quizArea = $("#quiz-area");
    var quizQuestion = $("#quiz-question");
    var startQuiz = $("#start-quiz");

    // Variables to change state
    var userScore = 0;
    var count = 60;
    var questionCount = 0;
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
    var question = questions[questionCount];

    // Start quiz event
    quizArea.on("click", function (event) {
        event.preventDefault();
        if (questionCount === 0) {
            setTimer();
        }
        if (questionCount < questions.length) {
            quizArea.empty();
            newQuestion();
            console.log(event.target.value);
        }
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


    // Test answer function
    function testAnswer() {
        if (btnClick === questions.c) {
            console.log("btn: " + btnClick + "question.c: " + question.c);
        }
    }

    // New Question function
    function newQuestion() {
        // var quizQuestion = $("<h1>");

        // Appends question to quizArea
        quizQuestion.text(question.q);
        quizArea.append(quizQuestion);

        // Appends answer buttons to quizArea
        for (i = 0; i < question.a.length; i++) {
            var answer = question.a[i];
            var answerBtn = $(`<div><button class="btn btn-info p-2 mb-2" id="answerBtn">${answer}</button></div>`)
            quizArea.append(answerBtn);
        }
        questionCount++;
        console.log("question count: " + questionCount);
    }

})