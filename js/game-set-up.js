var gameTheme, gradeTopic, gradeLevel;

function chooseGameTheme(choice) { //gets value onClick what chosen game
    gameTheme = choice;
    localStorage.setItem("gameTheme", gameTheme);
    window.location.href = "GameGradeLevel.html"; // href to grade level html
}

function chooseGradeTopic(choice) { //gets value onClick what chosen topic
    gradeTopic = choice;
    localStorage.setItem("gameTopic", gradeTopic);
    window.location.href = "OnGame.html"; // href to on game html or the game proper
}

function chooseGradeLevel(choice) { //gets value onClick what chosen grade level
    gradeLevel = choice;
    localStorage.setItem("gameGradeLevel", gradeLevel);
    window.location.href = "GameTopic.html"; // href to topics
}

function OnShowTopic() { // on show or load of the games_chosen_topic.html displays the class that contains the topics for the specific grade
    var grade = localStorage.getItem("gameGradeLevel");

    if (grade === "Kinder" || grade === "Grade1") {
        var topnon = document.getElementsByClassName("Topic_KG1");
        for (i = 0; i < topnon.length; i++) {
            topnon[i].style.display = "block";
        }

        var topvis = document.getElementsByClassName("Topic_G2_G3");
        for (i = 0; i < topvis.length; i++) {
            topvis[i].style.display = "none";
        }

    } else {

        var topnon = document.getElementsByClassName("Topic_KG1");
        for (i = 0; i < topnon.length; i++) {
            topnon[i].style.display = "none";
        }

        var topvis = document.getElementsByClassName("Topic_G2_G3");
        for (i = 0; i < topvis.length; i++) {
            topvis[i].style.display = "block";
        }
    }
}