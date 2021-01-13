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
    var data = [];

    // Check for local storage
    function checkStorage() {
        var storedData = JSON.parse(localStorage.getItem("data"));

        if (storedData !== null) {
            data = storedData;
        }
    }
    checkStorage();

    // object to hold questions
    var questions = [
        {
            q: "An array is used to __?",
            a: ["Stop a function", "Win at life", "Store multiple values in a single variable", "Store one value in a single variable"],
            c: "Store multiple values in a single variable"
        },
        {
            q: "2 + \"2\" = ",
            a: ["4", "22", "\"\"", "\"22\""],
            c: "\"22\""
        },
        {
            q: "What method can loop through an array?",
            a: ["slice()", "forEach()", "logarithm", "push()"],
            c: "forEach()"
        },
        {
            q: "The window is?",
            a: ["An object", "A pane of glass", "A computer screen", "None of the above"],
            c: "An object"
        },
        {
            q: "How long did it take Brendan Eich to develop Javascript?",
            a: ["2 months", "10 days", "10 years", "2 weeks"],
            c: "10 days"
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
                gameOver();
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
        console.log("answers" + question.a);
        // Check if any questions left in game.
        if (questionCount <= questions.length - 1) {
            quizArea.empty();
            quizQuestion.text(questions[questionCount].q);
            quizArea.append(quizQuestion);

            // Appends answer buttons to quizArea
            for (i = 0; i < question.a.length; i++) {
                var answer = questions[questionCount].a[i];
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
            var userData = {
                name: userName,
                score: userScore
            };
            data.push(userData);
            localStorage.setItem("data", JSON.stringify(data));
            displayScores();
        })
    }

    // Function to display high scores
    function displayScores() {
        quizArea.empty();
        quizArea.append(`<div><h3>High Score</h3></div>
                        <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>`);
        for (i = 0; i < data.length; i++) {
            var name = data[i].name;
            var score = data[i].score;
            $(".table").append(`<tbody>
                                    <tr>
                                        <td>${name}</td>
                                        <td>${score}</td>
                                    </tr>
                                <tbody>`)
        }
    }

    highScore.on("click", function () {
        displayScores();
    });
})