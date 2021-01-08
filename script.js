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
        var questionCount = 0;

        // New Question function
        function newQuestion() {
            // Appends question to quizArea
            var question = questions[questionCount];
            quizQuestion.text(question.q);
            quizArea.append(quizQuestion);

            // Appends answer buttons to quizArea
            for (i = 0; i < question.a.length; i++) {
                var answer = question.a[i];
                var answerBtn = $(`<div><button class="btn btn-info p-2 mb-2" id="answerBtn" value="${answer}">${answer}</button></div>`)
                quizArea.append(answerBtn);
            }
            questionCount++;
            console.log(questionCount);
        }
        newQuestion();

        quizArea.on("click", function (event) {
            event.preventDefault();
            var btnClick = event.target.value;
            console.log(typeof btnClick);
            console.log("event target value: " + btnClick);


        })
    }

})