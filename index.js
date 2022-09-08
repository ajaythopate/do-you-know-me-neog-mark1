var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Ajay",
    score: 3,
  },

  {
    name: "Vijay",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "What is BCCI full form? ",
  answer: "Board of Control for Cricket in India"
}, {
  question: "In which year was it founded?",
  answer: "December 1928"
},
{
  question: "Where is the headquarters?",
  answer: "Mumbai"
},
 
{
  question: "Who is the chairman of BCCI 2022?",
  answer: "Sourav Ganguly"
},
                {
  question: "who is the CEO for bcci?",
  answer: "Hemang Amin"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to DO YOU KNOW BCCI?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


