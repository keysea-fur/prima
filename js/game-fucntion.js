var pressStart, score, holdGame, holdObjectGame, phraseGameOver, phraseGameOverAfte,
    countGifSmooth, action, currenttime, correctAnswer, backgroundMusic;
var play = false,
    refreshPanel = false,
    Enable = false,
    checkPlayingMusic = false,
    appearInstruction = false;
var imageChangeCount = 0,
    gameLives = 0;
var gradeLevel = localStorage.getItem('gameGradeLevel'); //getting value from other js file
var gradeTopic = localStorage.getItem('gameTopic');
var theme = localStorage.getItem('gameTheme');

function appearTheme() { //Appear Theme that Have been chosen by the user

    switch (theme) {
        case 'SpaceTheme': //for game one
            backgroundMusic = new Audio('sounds/SpaceMusic.wav');

            SpaceGameSetUp();

            holdGame = "Game 1";
            phraseGameOver = "You have traveled <br>";
            phraseGameOverAfter = " km"

            if (gradeTopic == "Count") {
                holdObjectGame = "Count/"
                document.getElementById('image-move').style.backgroundImage = `url('${holdGame}/${holdObjectGame}/start.gif')`;
                pressStart = 3000;
            } else {
                holdObjectGame = "rocket";
                document.getElementById('image-move').style.backgroundImage = `url('${holdGame}/start.gif')`;
                pressStart = 6000;
            }
            appearStartButton('button-start-reset'); // for fading in of start btn
            break;

        case 'VirusTheme': //for game two
            backgroundMusic = new Audio('sounds/VirusMusic.wav');

            VirusGameSetUp();

            holdGame = "Game 2";
            phraseGameOver = "You have killed <br>";
            phraseGameOverAfter = " virus";

            if (gradeTopic == "Count") {
                holdObjectGame = "Count/"
                document.getElementById('image-move').style.backgroundImage = `url('${holdGame}/${holdObjectGame}/start.gif')`;
                pressStart = 5000;
            } else {
                holdObjectGame = "virus";
                document.getElementById('image-move').style.backgroundImage = `url('${holdGame}/start.gif')`;
                pressStart = 6000;
            }
            appearStartButton('button-start-reset'); // for fading in of start btn
            break;

        case 'CatTheme': //for game three
            backgroundMusic = new Audio('sounds/CatMusic.wav');

            CatGameSetUp();

            holdGame = "Game 3";
            phraseGameOver = "You have fed cat <br>";
            phraseGameOverAfter = " kg";

            if (gradeTopic == "Count") {
                holdObjectGame = "Count/"
                document.getElementById('image-move').style.backgroundImage = `url('${holdGame}/${holdObjectGame}/start.gif')`;
                pressStart = 7000;
            } else {
                holdObjectGame = "cat";
                document.getElementById('image-move').style.backgroundImage = `url('${holdGame}/start.gif')`;
                pressStart = 9000;
            }
            appearStartButton('button-start-reset'); // for fading in of start btn
            break;
        default: //for not recieving any theme
            console.error('no data recieved');
            break;
    }
}

function appearStartButton(Id) { //countdown of gif then start button wil appear
    setTimeout(function() {
        document.getElementById('button-start-reset').style.backgroundImage = `url('${holdGame}/startbtn.png')`; //changes background of button
        changeImage(5); //changing image after countdown of the gif
        Enable = true; //for not enabling the start button to generate the game
    }, pressStart); // seconds

}

document.getElementById('game-sound').onclick = function() { //for Background Music
    if (checkPlayingMusic === false) {
        backgroundMusic.muted = false;
        backgroundMusic.loop = true;
        backgroundMusic.play();
        document.getElementById('game-sound').style.backgroundImage = "url('games/soundbtn.png')";

        checkPlayingMusic = true;
    } else {
        backgroundMusic.muted = true;
        document.getElementById('game-sound').style.backgroundImage = "url('games/soundmutebtn.png')";
        checkPlayingMusic = false;
    }
}

function correctSound() { //for sound effect for correct answer
    if (checkPlayingMusic === true) {
        backgroundMusic.muted = false;
        new Audio('sounds/correct.wav').play();
    } else {
        backgroundMusic.muted = true;
    }
}

function wrongSound() { // for sound effect for wrong answer
    if (checkPlayingMusic === true) {
        backgroundMusic.muted = false;
        new Audio('sounds/wrong.wav').play();
    } else {
        backgroundMusic.muted = true;
    }
}

document.getElementById("button-start-reset").onclick = function() {
    if (Enable === true && appearInstruction === false) { //disabling inorder to start game
        if (play === true) {

            location.reload(); //reload the game
        } else {
            refresh(refreshPanel); //applicable for try again to refresh the game

            play = true;

            score = 0;

            document.getElementById('current-score-value').innerHTML = score;
            show('time');
            currenttime = 200;

            document.getElementById('current-time-value').innerHTML = currenttime;
            startCountdown(); //start countdown

            hide('game-finish');

            generateGame(); //where game is generated according to what grade and topic
            hide('button-start-reset');

        }
    }
}

document.getElementById('how-to-play').onclick = function() {
    if (appearInstruction === false) {
        show('instruction-game');
        appearInstruction = true;
    } else {
        hide('instruction-game');
        appearInstruction = false;
        location.reload();
    }
}

function startCountdown() { // starts coundown and stop on currenttime value
    action = setInterval(function() {
        currenttime -= 1; //decreasing the currenttime value - 1
        document.getElementById('current-time-value').innerHTML = currenttime;
        if (currenttime == 0) {
            startCountdown();
            show('game-finish');
            document.getElementById('game-finish').innerHTML =
                `<p> ${phraseGameOver + score + phraseGameOverAfter} </p>`; //for displaying that game is over


            hide('time');
            hide('correct');
            hide('wrong');
            document.getElementById('box1').innerHTML = null;
            document.getElementById('box2').innerHTML = null;
            document.getElementById('box3').innerHTML = null;
            document.getElementById('box4').innerHTML = null;
            hide('question');
            document.getElementById('question').innerHTML = null;

            play = false;
            refreshPanel = true;
            document.getElementById('button-start-reset').style.backgroundImage = `url('${holdGame}/tryagainbtn.png')`;

            changeImage(6); //game over displayed gif

            show('button-start-reset');
        }
    }, 1000); // in 1 second will appear
}

function stopCountdown() { //method to start the count down
    clearInterval(action);
}

function hide(Id) { //method for hiding Id elements
    document.getElementById(Id).style.display = 'none';
}

function show(Id) { //method for showing Id elements
    document.getElementById(Id).style.display = 'block';
}

function fadeNoticeAnswer(Id) { //fading out of an id in a second
    show(Id);
    setTimeout(function() {
        document.getElementById(Id).style.display = 'none';
    }, 1000);
}

function boxButtonChecker(num) { // for every box that is selected
    var content_box = document.getElementById(`box${num}`).textContent; //content of the box

    if (content_box == correctAnswer) { //if correct
        score++; //increment score to +1
        imageChangeCount++; //change image according to its number

        if (imageChangeCount == 5) { //reset count for image count
            imageChangeCount = 1;
        }

        document.getElementById('current-score-value').innerHTML = score;
        fadeNoticeAnswer('correct');
        correctSound();
        changeImage(imageChangeCount); //method that changes image according to imageChangeCount
        generateGame(); //regenerates the game
    } else { //if wrong
        if (content_box) { // if not null 
            fadeNoticeAnswer('wrong');
            gameLives++; //lives taken away in every wrong answer
            wrongSound();
            hide("live" + gameLives); //image of lives goes out
        }

        if (gameLives == 3) { // if out of lives it shows game over panel
            show('game-finish');
            document.getElementById('game-finish').innerHTML =
                `<p> ${phraseGameOver + score + phraseGameOverAfter} </p>`;


            hide('time');
            hide('correct');
            hide('wrong');
            document.getElementById('box1').innerHTML = null;
            document.getElementById('box2').innerHTML = null;
            document.getElementById('box3').innerHTML = null;
            document.getElementById('box4').innerHTML = null;
            hide('question');
            document.getElementById('question').innerHTML = null;

            play = false;
            refreshPanel = true;
            document.getElementById('button-start-reset').style.backgroundImage = "url('holdGame + "/tryagainbtn.png')";

            changeImage(6); //game over displayed gif

            show('button-start-reset');

            gameLives = 0;
        }

    }
}

function refresh(refreshPanel) { //refreshing the panel after 3 lives and time out

    if (refreshPanel === true) {
        document.getElementById('button-start-reset').style.backgroundImage = `url('${holdGame}/startbtn.png')`;
        hide('game-finish');
        show('question');
        location.reload();
    }
}

function onloadgif() { //for the smooth play of gif images
    for (var i = 0; i < 10; i++)
        setInterval(countGifSmooth++, 1);
}

function changeImage(imageChangeCount) { //for changing images in the console when correct
    setTimeout(function() {
        document.getElementById('image-move').style.backgroundImage = `url('${holdGame}/${holdObjectGame + imageChangeCount}.gif')`;
    }, onloadgif());

}

function generateGame() { //method that generates the game according what user have chosen grade level and topic
    if (theme == 'SpaceTheme') {
        switch (gradeLevel) { //swicth for grade level have chosen according to what the grade level variable hold
            case 'Kinder':
                if (gradeTopic === "Subtraction") { // if else for what topic have chosen according to what the grade topic variable hold
                    generateSubtractionGame(10);
                } else if (gradeTopic === "Addition") {
                    generateAdditionGame(10);
                } else {
                    generateCountGame();
                }

                break;
            case 'Grade1':
                if (gradeTopic === "Subtraction") {
                    generateSubtractionGame(20);
                } else if (gradeTopic === "Addition") {
                    generateAdditionGame(20);
                } else {
                    generateCountGame();
                }

                break;
            case 'Grade2':
                if (gradeTopic === "Subtraction") {
                    generateSubtractionGame(50);
                } else if (gradeTopic === "Addition") {
                    generateAdditionGame(50);
                } else if (gradeTopic === "Multiplication") {
                    generateMultiplyGame(10);
                } else {
                    generateDivisionGame(10);
                }

                break;
            case 'Grade3':
                if (gradeTopic === "Subtraction") {
                    generateSubtractionGame(90);
                } else if (gradeTopic === "Addition") {
                    generateAdditionGame(90);
                } else if (gradeTopic === "Multiplication") {
                    generateMultiplyGame(20);
                } else {
                    generateDivisionGame(20);
                }
                break;
            default:
                console.error("no data recieved");
        }
    } else if (theme == 'VirusTheme') {
        switch (gradeLevel) {
            case 'Kinder':
                if (gradeTopic === "Subtraction") {
                    generateFindSubtrahendGame(10);
                } else if (gradeTopic === "Addition") {
                    generateFindAddendGame(10);
                } else {
                    generateCountGame();
                }

                break;
            case 'Grade1':
                if (gradeTopic === "Subtraction") {
                    generateFindSubtrahendGame(20);
                } else if (gradeTopic === "Addition") {
                    generateFindAddendGame(20);
                } else {
                    generateCountGame();
                }

                break;
            case 'Grade2':
                if (gradeTopic === "Subtraction") {
                    generateFindSubtrahendGame(50);
                } else if (gradeTopic === "Addition") {
                    generateFindAddendGame(50);
                } else if (gradeTopic === "Multiplication") {
                    generateFindFactorGame(10);
                } else {
                    generateFindDivisorGame(10);
                }

                break;
            case 'Grade3':
                if (gradeTopic === "Subtraction") {
                    generateFindSubtrahendGame(90);
                } else if (gradeTopic === "Addition") {
                    generateFindAddendGame(90);
                } else if (gradeTopic === "Multiplication") {
                    generateFindFactorGame(20);
                } else {
                    generateFindDivisorGame(20);
                }
                break;
            default:
                console.error("no data recieved");
        }

    } else {
        switch (gradeLevel) {
            case 'Kinder':
                if (gradeTopic === "Subtraction") {
                    generateFindOperationSubtraction(10);
                } else if (gradeTopic === "Addition") {
                    generateFindOperationAddition(10);
                } else {
                    generateCountGame();
                }

                break;
            case 'Grade1':
                if (gradeTopic === "Subtraction") {
                    generateFindOperationSubtraction(20);
                } else if (gradeTopic === "Addition") {
                    generateFindOperationAddition(20);
                } else {
                    generateCountGame();
                }

                break;
            case 'Grade2':
                if (gradeTopic === "Subtraction") {
                    generateFindOperationSubtraction(50);
                } else if (gradeTopic === "Addition") {
                    generateFindOperationAddition(50);
                } else if (gradeTopic === "Multiplication") {
                    generateFindOperationMultiplication(10);
                } else {
                    generateFindOperationDivision(10);
                }

                break;
            case 'Grade3':
                if (gradeTopic === "Subtraction") {
                    generateFindOperationSubtraction(90);
                } else if (gradeTopic === "Addition") {
                    generateFindOperationAddition(90);
                } else if (gradeTopic === "Multiplication") {
                    generateFindOperationMultiplication(20);
                } else {
                    generateFindOperationDivision(20);
                }
                break;
            default:
                console.error("no data recieved");
                break;
        }
    }
}

function generateCountGame() {
    var x = 1 + Math.round(9 * Math.random());
    changeImage(x);

    correctAnswer = x;

    document.getElementById('question').innerHTML = "COUNT THEM";
    document.getElementById('question').style.fontSize = "40px";

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(9 * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateMultiplyGame(limit) { //for multiplication game

    var x = 1 + Math.round(limit * Math.random()); //random numbers from 1 to limit variable that is declared
    var y = 1 + Math.round(limit * Math.random());
    correctAnswer = x * y; // multiplies the two random numbers to have the correct answer

    document.getElementById('question').innerHTML = x + " x " + y; // display the numbers and operation

    var correctPosition = 1 + Math.round(3 * Math.random()); //random number from 1 to 4 where to put the correct answer

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer; //display the corrrect answer according to the random number that is given in the correctPosition variable

    var answers = [correctAnswer]; //for the dispay of boxes with answers

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) { //for othe box display wrong answer
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(limit * Math.random())) * (1 + Math.round(limit * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateDivisionGame(limit) { // for division game

    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());

    while (y > x) { //the dividend will be larger that the divisor
        y = 1 + Math.round(limit * Math.random());
    }
    correctAnswer = (x / y).toFixed(2); //display only 2 decimal places

    document.getElementById('question').innerHTML = x + " ÷ " + y;

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = ((1 + Math.round(limit * Math.random())) / (1 + Math.round(limit * Math.random()))).toFixed(2);
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateAdditionGame(limit) { //for addition game
    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());
    correctAnswer = x + y;

    document.getElementById('question').innerHTML = x + " + " + y;

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(limit * Math.random())) + (1 + Math.round(limit * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateSubtractionGame(limit) { //for subtraction game

    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());

    while (y > x) { //the minuend will be larger that the subtrahend
        y = 1 + Math.round(limit * Math.random());
    }
    correctAnswer = x - y;

    document.getElementById('question').innerHTML = x + " - " + y;

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(limit * Math.random())) - (1 + Math.round(limit * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateFindAddendGame(limit) { //for finding addend game

    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());

    correctAnswer = y;

    document.getElementById('question').innerHTML = x + "+<span style='color:red'>_</span>=" + (x + y);

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(limit * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateFindFactorGame(limit) { //for finding factor game

    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());

    correctAnswer = y;

    document.getElementById('question').innerHTML = x + "x<span style='color:red'>_</span>=" + (x * y);

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(limit * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateFindSubtrahendGame(limit) { //for finding subtrahend game

    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());
    while (y > x) {
        y = 1 + Math.round(limit * Math.random());
    }

    correctAnswer = y;

    document.getElementById('question').innerHTML = x + "-<span style='color:red'>_</span>=" + (x - y);

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(limit * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateFindDivisorGame(limit) { //for finding divisor game

    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());
    while (y > x) {
        y = 1 + Math.round(limit * Math.random());
    }

    correctAnswer = y;

    document.getElementById('question').innerHTML = x + "÷<span style='color:red'>_</span>=" + (x / y).toFixed(1);

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(limit * Math.random()));
            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateFindOperationAddition(limit) { //for finding addition operation
    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());
    correctAnswer = String(x) + "+" + String(y);

    var questionAns = (x + y);

    document.getElementById('question').innerHTML = "<span style='color:red'>?</span>=" + questionAns;

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {

                var xwrong = 1 + Math.round(limit * Math.random());
                var ywrong = 1 + Math.round(limit * Math.random());
                var totalWrong = xwrong + ywrong;

                while (totalWrong == questionAns) {
                    xwrong = 1 + Math.round(limit * Math.random());
                    ywrong = 1 + Math.round(limit * Math.random());
                }

                wrongAnswer = String(xwrong) + "+" + String(ywrong);


            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateFindOperationSubtraction(limit) { //for finding subtraction operation
    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());

    while (y > x) {
        y = 1 + Math.round(limit * Math.random());
    }

    correctAnswer = String(x) + "-" + String(y);

    var questionAns = (x - y);

    document.getElementById('question').innerHTML = "<span style='color:red'>?</span>=" + questionAns;

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {

                var xwrong = 1 + Math.round(limit * Math.random());
                var ywrong = 1 + Math.round(limit * Math.random());
                var differenceWrong = xwrong - ywrong;

                while (differenceWrong == questionAns) {
                    xwrong = 1 + Math.round(limit * Math.random());
                    ywrong = 1 + Math.round(limit * Math.random());
                }

                wrongAnswer = String(xwrong) + "-" + String(ywrong);


            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateFindOperationDivision(limit) { //for finding subtraction operation
    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());

    while (y > x) {
        y = 1 + Math.round(limit * Math.random());
    }

    correctAnswer = String(x) + "÷" + String(y);

    var questionAns = (x / y).toFixed(1);

    document.getElementById('question').innerHTML = "<span style='color:red'>?</span>=" + questionAns;

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {

                var xwrong = 1 + Math.round(limit * Math.random());
                var ywrong = 1 + Math.round(limit * Math.random());
                var divideWrong = xwrong / ywrong;

                while (divideWrong == questionAns) {
                    xwrong = 1 + Math.round(limit * Math.random());
                    ywrong = 1 + Math.round(limit * Math.random());
                }

                wrongAnswer = String(xwrong) + "÷" + String(ywrong);


            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function generateFindOperationMultiplication(limit) { //for finding addition operation
    var x = 1 + Math.round(limit * Math.random());
    var y = 1 + Math.round(limit * Math.random());
    correctAnswer = String(x) + "x" + String(y);

    var questionAns = (x * y);

    document.getElementById('question').innerHTML = "<span style='color:red'>?</span>=" + questionAns;

    var correctPosition = 1 + Math.round(3 * Math.random());

    document.getElementById(`box${correctPosition}`).innerHTML = correctAnswer;

    var answers = [correctAnswer];

    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {

                var xwrong = 1 + Math.round(limit * Math.random());
                var ywrong = 1 + Math.round(limit * Math.random());
                var multiplyWrong = xwrong * ywrong;

                while (multiplyWrong == questionAns) {
                    xwrong = 1 + Math.round(limit * Math.random());
                    ywrong = 1 + Math.round(limit * Math.random());
                }

                wrongAnswer = String(xwrong) + "x" + String(ywrong);


            } while (answers.indexOf(wrongAnswer) > -1)

            document.getElementById(`box${i}`).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}

function SpaceGameSetUp() {
    document.body.style.backgroundImage = "url('images/Game 1/bg.png')"; //setting the design for the game
    document.querySelector('.console-img').setAttribute('src', "images/Game 1/console.png");
    document.getElementById('box1').style.backgroundImage = "url('images/Game 1/btnans1.png')";
    document.getElementById('box2').style.backgroundImage = "url('images/Game 1/btnans2.png')";
    document.getElementById('box3').style.backgroundImage = "url('images/Game 1/btnans3.png')";
    document.getElementById('box4').style.backgroundImage = "url('images/Game 1/btnans4.png')";

    document.getElementById('live1').style.backgroundImage = "url('images/Game 1/fuel1.png')";
    document.getElementById('live2').style.backgroundImage = "url('images/Game 1/fuel2.png')";
    document.getElementById('live3').style.backgroundImage = "url('images/Game 1/fuel3.png')";
    document.getElementById('game-finish').style.color = "#efa536";
    document.querySelector('#instruction-game').setAttribute('src', "images/games/HowToPlayGame1.gif");
}

function VirusGameSetUp() {
    document.body.style.backgroundImage = "url('images/Game 2/bg.png')"; //setting the design for the game
    document.querySelector('.console-img').setAttribute('src', "images/Game 2/console.png");

    var homebtn = document.getElementsByClassName('homepage-btns');
    for (i = 0; i < homebtn.length; i++) {
        homebtn[i].style.marginLeft = "45px";
    }

    var upper = document.getElementsByClassName('upper-console-set-up');
    for (i = 0; i < upper.length; i++) {
        upper[i].style.top = "25px";
        upper[i].style.width = "690px";
        upper[i].style.left = "65px";
        upper[i].style.borderRadius = "0px";
    }

    document.getElementById('image-move').style.height = "270px";
    document.getElementById('image-move').style.backgroundSize = "690px 270px";

    var lives = document.getElementsByClassName('lives');
    for (i = 0; i < lives.length; i++) {
        lives[i].style.backgroundSize = "45px 45px";
        lives[i].style.height = "45px";
        lives[i].style.width = "45px";
    }

    document.getElementById('live3').style.marginRight = "20px";
    document.getElementById('live2').style.right = "70px";
    document.getElementById('live1').style.right = "120px";

    document.getElementById('score-board').style.bottom = "225px";
    document.getElementById('score-board').style.left = "270px";
    document.getElementById('score-board').style.padding = "0px";
    document.getElementById('score-board').style.color = "#bb1c70";

    document.getElementById('time').style.color = "#bb1c70";
    document.getElementById('time').style.bottom = "215px";
    document.getElementById('time').style.left = "450px";

    document.getElementById('question').style.top = "413px";
    document.getElementById('question').style.left = "195px";
    document.getElementById('question').style.width = "300px";
    document.getElementById('question').style.fontSize = "70px";
    document.getElementById('question').style.color = "#212121";

    document.getElementById('box1').style.backgroundImage = "url('images/Game 2/btnans1.png')";
    document.getElementById('box1').style.right = "100px";
    document.getElementById('box1').style.bottom = "130px";

    document.getElementById('box2').style.backgroundImage = "url('images/Game 2/btnans2.png')";
    document.getElementById('box2').style.left = "510px";
    document.getElementById('box2').style.bottom = "130px";

    document.getElementById('box3').style.backgroundImage = "url('images/Game 2/btnans3.png')";
    document.getElementById('box3').style.right = "100px";
    document.getElementById('box3').style.bottom = "20px";

    document.getElementById('box4').style.backgroundImage = "url('images/Game 2/btnans4.png')";
    document.getElementById('box4').style.left = "510px";
    document.getElementById('box4').style.bottom = "20px";

    document.getElementById('live1').style.backgroundImage = "url('images/Game 2/bubbleLife1.png')";
    document.getElementById('live2').style.backgroundImage = "url('images/Game 2/bubbleLife2.png')";
    document.getElementById('live3').style.backgroundImage = "url('images/Game 2/bubbleLife3.png')";

    document.getElementById('button-start-reset').style.left = "53px";
    document.getElementById('button-start-reset').style.bottom = "135px";

    document.getElementById('game-finish').style.color = "#efa536";

    document.querySelector('#instruction-game').setAttribute('src', "images/games/HowToPlayGame2.gif");
    document.getElementById('instruction-game').style.top = "95px";
    document.getElementById('instruction-game').style.left = "50px";

    var signal = document.getElementsByClassName('signal-correct-wrong');
    for (i = 0; i < signal.length; i++) {
        signal[i].style.left = "70px";
        signal[i].style.bottom = "240px";
        signal[i].style.padding = "8px";
        signal[i].style.border = "2px solid #363636";
    }

    var labelFooter = document.getElementsByClassName('color-label');
    for (i = 0; i < labelFooter.length; i++) {
        labelFooter[i].style.color = "#162b61";

    }
}

function CatGameSetUp() {
    document.body.style.backgroundImage = "url('images/Game 3/bg.png')"; //setting the design for the game
    document.querySelector('.console-img').setAttribute('src', "images/Game 3/console.png");

    var consoleImg = document.getElementsByClassName('console-img');
    for (i = 0; i < consoleImg.length; i++) {
        consoleImg[i].style.position = "absolute";
        consoleImg[i].style.left = "130px";
        consoleImg[i].style.height = "642px";
    }

    document.getElementById('image-move').style.backgroundSize = "350px 325px";
    document.getElementById('image-move').style.height = "300px";

    var upperConsole = document.getElementsByClassName('upper-console-set-up');
    for (i = 0; i < upperConsole.length; i++) {
        upperConsole[i].style.top = "55px";
        upperConsole[i].style.left = "240px";
        upperConsole[i].style.width = "350px";
        upperConsole[i].style.borderRadius = "0px";
    }

    var setting = document.getElementsByClassName('upper-settings-left');
    for (i = 0; i < setting.length; i++) {
        setting[i].style.width = "55px";
        setting[i].style.height = "50px";
        setting[i].style.backgroundSize = "55px 50px";
        setting[i].style.marginTop = "0px";
    }
    document.getElementById('how-to-play').style.left = "45px";
    document.getElementById('game-sound').style.marginLeft = "0px";

    var lives = document.getElementsByClassName('lives');
    for (i = 0; i < lives.length; i++) {
        lives[i].style.marginTop = "10px";
        lives[i].style.backgroundSize = "40px 35px";
        lives[i].style.height = "35px";
        lives[i].style.width = "40px";
    }

    document.getElementById('live2').style.right = "10px";
    document.getElementById('live2').style.top = "40px";
    document.getElementById('live1').style.right = "10px";
    document.getElementById('live1').style.top = "80px";

    document.getElementById('live1').style.backgroundImage = "url('images/Game 3/pawLife1.png')";
    document.getElementById('live2').style.backgroundImage = "url('images/Game 3/pawLife2.png')";
    document.getElementById('live3').style.backgroundImage = "url('images/Game 3/pawLife3.png')";

    document.getElementById('question').style.top = "400px";
    document.getElementById('question').style.left = "190px";
    document.getElementById('question').style.width = "190px";
    document.getElementById('question').style.height = "110px";
    document.getElementById('question').style.fontSize = "60px";

    document.getElementById('score-board').style.top = "545px";
    document.getElementById('score-board').style.left = "345px";
    document.getElementById('score-board').style.padding = "0px";

    document.getElementById('time').style.top = "600px";
    document.getElementById('time').style.left = "350px";
    document.getElementById('time').style.fontSize = "20px";

    document.getElementById('box1').style.backgroundImage = "url('images/Game 3/btnans1.png')";
    document.getElementById('box1').style.right = "210px";
    document.getElementById('box1').style.top = "530px";

    document.getElementById('box2').style.backgroundImage = "url('images/Game 3/btnans2.png')";
    document.getElementById('box2').style.left = "400px";
    document.getElementById('box2').style.top = "530px";

    document.getElementById('box3').style.backgroundImage = "url('images/Game 3/btnans3.png')";
    document.getElementById('box3').style.right = "210px";
    document.getElementById('box3').style.top = "640px";

    document.getElementById('box4').style.backgroundImage = "url('images/Game 3/btnans4.png')";
    document.getElementById('box4').style.left = "400px";
    document.getElementById('box4').style.top = "640px";

    var box = document.getElementsByClassName('box');
    for (i = 0; i < box.length; i++) {
        box[i].style.width = "100px";
        box[i].style.backgroundSize = "100px 100px";
        box[i].style.fontFamily = "SuperMario";
        box[i].style.fontSize = "20px";
    }

    var signal = document.getElementsByClassName('signal-correct-wrong');
    for (i = 0; i < signal.length; i++) {
        signal[i].style.left = "160px";
        signal[i].style.top = "610px";
        signal[i].style.padding = "8px";
        signal[i].style.border = "2px solid #363636";
    }

    document.getElementById('button-start-reset').style.left = "174px";
    document.getElementById('button-start-reset').style.top = "528px";
    document.getElementById('button-start-reset').style.backgroundSize = "110px 110px";
    document.getElementById('button-start-reset').style.height = "90px";

    document.getElementById('game-finish').style.color = "#efa536";
    document.getElementById('game-finish').style.width = "350px";
    document.getElementById('game-finish').style.height = "325px";
    document.getElementById('game-finish').style.top = "50px";
    document.getElementById('game-finish').style.left = "240px";

    document.querySelector('#instruction-game').setAttribute('src', "images/games/HowToPlayGame3.gif");
    document.getElementById('instruction-game').style.top = "110px";
    document.getElementById('instruction-game').style.left = "50px";

    var labelFooter = document.getElementsByClassName('color-label');
    for (i = 0; i < labelFooter.length; i++) {
        labelFooter[i].style.color = "#162b61";

    }

}
