var quizForm = document.querySelector("#quiz-form");
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output");

var rightAnswers = ["Mutton Biriyani", "Cristiano Ronaldo", "Rabindra Sarobar", "Shreya", "Read Books", "Own Parents", "12 Rules For Life", "Never Give Up"]

checkButton.addEventListener("click", calculateScore);

function calculateScore() {

    let score = 0;
    let index = 0;

    var formResults = new FormData(quizForm);

}


