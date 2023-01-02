const startButton = document.querySelector("#start");
const startScreen = document.querySelector("#start-screen");
const questionsScreen = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choices = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const timerElement = document.querySelector("#time");
const questions = [{
    q: "1. What HTML stand for?",
    choices: ["A. Hyper Text Preprocessor",
        "B. Hyper Text Markup Language ",
        "C. Hyper Text Multiple Language",
        "D.  Hyper Tool Multi Language"],
    correct: "B. Hyper Text Markup Language ",
},
{
    q: "2. What does CSS stand for?",
    choices: ["A. Common Style Sheet",
        "B. Colorful Style Sheet",
        "C. Computer Style Sheet",
        "D. Cascading Style Sheet"],
    correct: "D. Cascading Style Sheet",
},
{
    q: "3. What is the largest city in the world per population?",
    choices: ["A. Tokyo, Japan",
        "B. Delhi, India",
        "C. Shanghai, China",
        "D. Sao Paulo, Brazil"],
    correct: "A. Tokyo, Japan",
},
{
    q: "4. What does SQL stand for?",
    choices: ["A. Stylish Question Language",
        "B. Stylesheet Query Language",
        "C. Statement Question Language",
        "D. Structured Query Language"],
    correct: "D. Structured Query Language",
},
]
var timer;
var timerCount;
var question;
startButton.addEventListener('click', startGame)
question = 0;
setNextQuestion();
//Start the game function
function startGame() {
    timerCount = 30;
    question = 0;
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    feedback.classList.remove("hide");
    startTimer();
    setNextQuestion();


}
//Start timer function
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 1000);
}
function setNextQuestion() {
    questionTitle.innerHTML = questions[question].q;
    for (var i = 0; i < 4; i++) {
        const button = document.createElement("button")
        button.textContent = questions[question].choices[i];
        // button.addEventListener
        choices.append(button)
    }

}


// function selectAnswer() {
//     choices.innerHTML = questions[question].choices;
// }


