
// TODO: split questions into a separate file

const VKquestions = [
  {
    question: "You see a seagull on the beach, and you:",
    answers: [
      {
        text:
          "feed it the leftovers from the greek restaurant you heard was authentic (but wasn't).",
        points: 0,
      },
      {
        text: "chase it off the beach and hope it doesn't poop on your coat.",
        points: 2,
      },
      {
        text: "kill it and eat it with the leftovers.",
        points: 10,
      },
      {
        text: "ignore it.",
        points: 0,
      },
    ],
  },
  {
    question: "You had a bad day at work, so you:",
    answers: [
      {
        text: "plot the destruction of your enemies.",
        points: 10,
      },
      {
        text:
          "eat a bag of Swiss dark chocolate while you swipe left on Tinder.",
        points: 0,
      },
      {
        text: "relax in a bubble bath of lavendar and mint.",
        points: 0,
      },
      {
        text: "quit.",
        points: 5,
      },
    ],
  },
  {
    question:
      "You live on the beach. A set of Saturday morning swimmers goes by your window, and you:",
    answers: [
      {
        text: "join them! The water looks fantastic.",
        points: 0,
      },
      {
        text:
          "wonder what possesses someone to do that when they could be doing anything else.",
        points: 5,
      },
      {
        text: "put on your coat, go down to the beach, and watch curiously.",
        points: 7,
      },
      {
        text: "make some coffee and turn on the TV.",
        points: 0,
      },
    ],
  },
  {
    question:
      "You're working a front desk during a pandemic. A man approaches you without his mask, so you:",
    answers: [
      {
        text: "politely ask him to put his mask on before helping him.",
        points: 0,
      },
      {
        text:
          "post a sign about current safety regulations and find an excuse to be somewhere else.",
        points: 0,
      },
      {
        text: "refuse him service. Men never listen anyway.",
        points: 5,
      },
      {
        text: "take your mask off, too.",
        points: 10,
      },
    ],
  },
  {
    question:
      "A love song which reminds you of your ex plays. Your first instinct is:",
    answers: [
      {
        text: "you still have feelings for your ex.",
        points: 0,
      },
      {
        text: "change the station.",
        points: 7,
      },
      {
        text: "you've never been in love.",
        points: 10,
      },
      {
        text: "take some alone time to enjoy your memories.",
        points: 0,
      },
    ],
  },
  {
    question:
      "Your roommate never, ever washes the containers before putting them in the recycling, so you:",
    answers: [
      {
        text:
          "remove the containers, wash them, and put them back without saying anything.",
        points: 7,
      },
      {
        text:
          "remember that recycling is a scam started by the plastic manufacturers who knew it wouldn't work.",
        points: 5,
      },
      {
        text: "bury the body and report roommate missing.",
        points: 10,
      },
      {
        text: "politely ask your roommate to change their behavior.",
        points: 0,
      },
    ],
  },
  {
    question:
      "The Christmas decorations are still sitting in boxes and bags in the hallway. It's almost March.",
    answers: [
      {
        text: "Burn them. You can buy new decorations in November",
        points: 10,
      },
      {
        text: "Walk by them until April.",
        points: 0,
      },
      {
        text: "Pack them carefully and put them away.",
        points: 3,
      },
      {
        text: "Become an atheist.",
        points: 7,
      },
    ],
  },
  {
    question:
      "You observe a spider on your ceiling as you watch Netflix in the dark.",
    answers: [
      {
        text: "Kill the spider.",
        points: 5,
      },
      {
        text: "Bring the spider outside.",
        points: 0,
      },
      {
        text: "Ignore it.",
        points: 7,
      },
      {
        text: "Yay! A new cat toy.",
        points: 10,
      },
    ],
  },
  {
    question:
      "There's a supermassive black hole at the centre of our galaxy. If you could, you'd:",
    answers: [
      {
        text: "study it from a safe distance.",
        points: 5,
      },
      {
        text: "fall in",
        points: 5,
      },
      {
        text: "move to a different galaxy. It's gonna consume everything!",
        points: 0,
      },
      {
        text: "harness its energy to power your spacecraft.",
        points: 10,
      },
    ],
  },
  {
    question: "What actor has the most Academy Awards?",
    answers: [
      {
        text: "Meryl Streep",
        points: 0,
      },
      {
        text: "Jack Nicholson",
        points: 10,
      },
      {
        text: "Daniel Day-Lewis",
        points: 0,
      },
      {
        text: "Katharine Hepburn",
        points: 0,
      },
    ],
  },
  {
    question: "Where in the human body would you find the medulla oblongata?",
    answers: [
      {
        text: "Brain",
        points: 10,
      },
      {
        text: "Reproductive System",
        points: 0,
      },
      {
        text: "Endocrine System",
        points: 0,
      },
      {
        text: "Upper GI",
        points: 0,
      },
    ],
  },
  {
    question: "What is the spiciest chili pepper in the world?",
    answers: [
      {
        text: "Thai Ghost",
        points: 0,
      },
      {
        text: "Carolina Reaper",
        points: 5,
      },
      {
        text: "Jersey Devil",
        points: 0,
      },
      {
        text: "I don't eat spicy food.",
        points: 10,
      },
    ],
  },
  {
    question: "What's the capital city of Tanzania?",
    answers: [
      {
        text: "Kinshasa",
        points: 0,
      },
      {
        text: "Dodoma",
        points: 10,
      },
      {
        text: "Dar es Salaam",
        points: 5,
      },
      {
        text: "Mogadishu",
        points: 0,
      },
    ],
  },
  {
    question: "What's the main ingredient in a boulevardier?",
    answers: [
      {
        text: "bourbon",
        points: 10,
      },
      {
        text: "wood",
        points: 0,
      },
      {
        text: "concrete",
        points: 0,
      },
      {
        text: "gin",
        points: 5,
      },
    ],
  },
  {
    question: "How long was the world's longest human fart?",
    answers: [
      {
        text: "1 minute, 37 seconds",
        points: 0,
      },
      {
        text: "3 minutes, 3 seconds",
        points: 0,
      },
      {
        text: "2 minutes, 42 seconds",
        points: 10,
      },
      {
        text: "57 seconds",
        points: 0,
      },
    ],
  },
  {
    question: "Where would you find the oldest pot plant in the world?",
    answers: [
      {
        text: "Kew Gardens, UK",
        points: 10,
      },
      {
        text: "Amazon Rainforest, Manaus, Brazil",
        points: 0,
      },
      {
        text: "Orto Botanico di Padova, Italy",
        points: 0,
      },
      {
        text: "Humboldt County, USA",
        points: 0,
      },
    ],
  },
];

// collect the elements from the HTML for usage
var gameTimer = document.querySelector("#time-disp");
var currQuest = document.querySelector("#curr-quest");
var answer1 = document.querySelector("#ans1");
var answer2 = document.querySelector("#ans2");
var answer3 = document.querySelector("#ans3");
var answer4 = document.querySelector("#ans4");
var startBttn = document.querySelector("#start-button");
var scoreBttn = document.querySelector("#view-scores");
var ansDisp = document.querySelector(".question-ans");
var scoresDiv = document.querySelector(".display-scores");
var finalScore = document.querySelector("#show-score");
var scoreDisp = document.querySelector(".capture-init");
var restartBttn = document.querySelector("#restart");
var initBttn = document.querySelector("#add-init");
var enterInit = document.querySelector("#user-init");
var scoresArray = [];
restartBttn.style.display = "none";

// set the score to an empty variable
var userScore = 0;

// set time variables

var timer = 240;
var qIndex = -1;
var timerInterval;

userScores();

// start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    timer--;
    gameTimer.textContent = timer;
    if (timer === 0) {
        endQuiz();
      }
  }, 1000);
}

// display the next question
function nextQ() {
  if (++qIndex === VKquestions.length) {
    endQuiz();
  }
  currQuest.textContent = VKquestions[qIndex].question;
  answer1.textContent = VKquestions[qIndex].answers[0].text;
  answer2.textContent = VKquestions[qIndex].answers[1].text;
  answer3.textContent = VKquestions[qIndex].answers[2].text;
  answer4.textContent = VKquestions[qIndex].answers[3].text;
}

// display a randomized question
function randomQ(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var s = Math.floor(Math.random() * i);
    var switchedQ = array[i];
    array[i] = array[s];
    array[s] = switchedQ;
  }
  nextQ();
}

// end the assessment and display scores
function endQuiz() {
  clearInterval(timerInterval);
  if (timer < 0) {
    timer = 0;
  }
  calcScore();
  ansDisp.style.display = "none";
  scoreDisp.style.display = "inline"; 
  finalScore.textContent = userScore;
  restartBttn.style.display = "inline"; 
  scoreBttn.style.display = "inline"; 
}

// Event listener to start quiz
startBttn.addEventListener("click", function startQuiz() {
  timer = 240;
  startTimer();
  userScore = 0;
  startBttn.style.display = "none";
  scoreBttn.style.display = "none";
  randomQ(VKquestions);

  document.querySelectorAll("li").forEach(function (choice) {
    choice.addEventListener("click", function (event) {
      VKquestions.forEach((matchAns) => {
        matchAns.answers.forEach((answer) => {
          if (answer.text === event.target.textContent && answer.points === 0) {
            timer -= 20;
          } else if (answer.text === event.target.textContent) {
            userScore += answer.points;
            console.log(userScore);
          }
        });
      });
      nextQ();
    });
  });
});

// Event listener to save score
initBttn.addEventListener("click", function(event) {
      event.preventDefault();
      var userInits = enterInit.value;
      scoresArray.push({initials:userInits, score:userScore});
      console.log(scoresArray);
      localStorage.setItem("Previous Entries", JSON.stringify(scoresArray));
      currQuest.innerHTML = "";
      gameTimer.textContent = "4:00";
      scoreDisp.innerHTML = "<h4>Your score has been saved.</h>";
});


// Event listener to go to highscore page
function userScores() {
    scoreBttn.addEventListener("click", function() {
        scoreBttn.style.display = "none";
        startBttn.style.display = "none"; 
        ansDisp.style.display = "none";
        scoreDisp.style.display = "none";
        currQuest.textContent = "Previous Player Results:"
        currQuest.style.color = "goldenrod"
        scoresDiv.style.display = "inline-block";
//TODO: pull from localstorage to display previous scores
        restartBttn.style.display = "inline"; 
  });
};

// Event listener to start quiz
restartBttn.addEventListener("click", function() {
  location.reload();
});

// Display result based on userScore
function calcScore() {
  if (userScore > 139) {
      currQuest.textContent = "CONFIRMED REPLICANT";
      currQuest.style.color = "red";
  } else if (userScore > 99 && userScore < 140) {
      currQuest.textContent = "Possible Replicant. Surveillance authorized.";
      currQuest.style.color = "honeydew";
  } else if (userScore <= 50) {
      currQuest.textContent = "Confirmed Human.";
      currQuest.style.color = "#0cb906";
  } else {
      currQuest.textContent = "Probable Human. Await more data.";
  } 
};
