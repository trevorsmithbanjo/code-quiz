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
    var userName = "";

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
    startQuiz.on("click", function (event) {
        console.log("start quiz " + event);
        event.preventDefault();
        if (questionCount === 0) {
            setTimer();
        }
        if (questionCount < questions.length) {
            quizArea.empty();
            newQuestion();
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
    function testAnswer(val) {
        // debugger;
        console.log("test val " + val);
        console.log(questions[questionCount].c);
        if (val === questions[questionCount].c) {
            console.log("btn: " + val + " question.c: " + questions[questionCount].c);
            console.log("correct");
            userScore++;
            questionCount++;
            newQuestion();
        }
        else {
            console.log("btn: " + val + " question.c: " + questions[questionCount].c);
            console.log("incorrect");
            questionCount++;
            count -= 10;
            newQuestion();
        }
    }

    // New Question function
    function newQuestion() {
        // Check if any questions left in game.
        if (questionCount <= questions.length - 1) {
            quizArea.empty();
            quizQuestion.text(questions[questionCount].q);
            quizArea.append(quizQuestion);

            // Appends answer buttons to quizArea
            for (i = 0; i < question.a.length; i++) {
                var answer = question.a[i];
                var answerBtn = $(`<div><button class="btn btn-info p-2 mb-2 answerBtn" value="${answer}">${answer}</button></div>`)
                quizArea.append(answerBtn);
            }

            $(".answerBtn").on("click", function (event) {
                testAnswer(event.target.innerText);
            })

            console.log("question count: " + questionCount);
        }
        else {
            gameOver();
        }
    }

    function gameOver() {
        count = 1;
        quizArea.empty();
        quizArea.append(`<div><h1>Game Over</h1></div>
                            <div><h3>Quiz Score: ${userScore}</h3><div>
                            <div><label>Enter Name</lable><br>
                            <input id="user-name">
                            <button class="btn btn-info" id="name-btn">Save Score</button>
                            </div>`);
        $("#name-btn").on("click", function (event) {
            event.preventDefault();
            var userName = $("#user-name").val().trim();
            localStorage.setItem("name", userName);
            localStorage.setItem("score", userScore);
        })
    }

    var savedScores = localStorage.getItem("name");
    var savedNames = localStorage.getItem("score");
    console.log(savedScores);
    console.log(savedNames);

})