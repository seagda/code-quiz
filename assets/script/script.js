// TODO: Create a start button with click event attached.
    // TODO: Create a timer div and update that
    // TODO: refresh the question-body div with first of series of multiple-choice questions
            //TODO: if correct answer, move to next question and increment and save score and time-left (or time taken? or product of score with time-left) variable.
            //TODO: else subtract from timer, clear and display next question
// TODO: When timer equals 0, end game
// TODO: When all questions answered, end game
// TODO: all user to save initials

const VKquestions = [
    {
        question: "You see a seagull on the beach, and you:",
        answers: [
            {
                text: "feed it the leftovers from the greek restaurant you heard was authentic (but wasn't).",
                points: 0
            },
            {
                text: "chase it off the beach and hope it doesn't poop on your coat.",
                points: 2
            },
            {
                text: "kill it and eat it with the leftovers.",
                points: 10
            },
            {
                text: "ignore it.",
                points: 0
            }
        ]
    },
    {
        question: "You had a bad day at work, so you:",
        answers: [
            {
                text: "plot the destruction of your enemies.",
                points: 10
            },
            {
                text: "eat a bag of Swiss dark chocolate while you swipe left on Tinder.",
                points: 0
            },
            {
                text: "relax in a bubble bath of lavendar and mint.",
                points: 0
            },
            {
                text: "quit.",
                points: 5
            }
        ]
    },
    {
        question: "You live on the beach. A set of Saturday morning swimmers goes by your window, and you:",
        answers: [
            {
                text: "join them! The water looks fantastic.",
                points: 0
            },
            {
                text: "wonder what possesses someone to do that when they could be doing anything else.",
                points: 5
            },
            {
                text: "put on your coat, go down to the beach, and watch curiously.",
                points: 7
            },
            {
                text: "make some coffee and turn on the TV.",
                points: 0
            }
        ]
    },
    {
        question: "You're working a front desk during a pandemic. A man approaches you without his mask, so you:",
        answers: [
            {
                text: "politely ask him to put his mask on before helping him.",
                points: 0
            },
            {
                text: "post a sign about current safety regulations and find an excuse to be somewhere else.",
                points: 0
            },
            {
                text: "refuse him service. Men never listen anyway.",
                points: 5
            },
            {
                text: "take your mask off, too.",
                points: 10
            }
        ]
    },
    {
        question: "A love song which reminds you of your ex comes on the radio, and you're in a new relationship. Your instinct is to:",
        answers: [
            {
                text: "tell your new partner you still have feelings for your ex.",
                points: 0
            },
            {
                text: "change the station.",
                points: 7
            },
            {
                text: "wonder why you've never fallen in love.",
                points: 10
            },
            {
                text: "take some alone time to enjoy your memories.",
                points: 0
            }
        ]
    },
    {
        question: "Your roommate never, ever washes the containers before putting them in the recycling, so you:",
        answers: [
            {
                text: "remove the containers, wash them, and put them back without saying anything.",
                points: 7
            },
            {
                text: "remember that recycling is a scam started by the plastic manufacturers who knew it wouldn't work.",
                points: 5 
            },
            {
                text: "bury the body and call the police.",
                points: 10
            },
            {
                text: "politely ask your roommate to change their behavior.",
                points: 0
            }
        ]
    },
    {
        question: "The Christmas decorations are still sitting in boxes and bags in the hallway. It's almost March.",
        answers: [
            {
                text: "Burn them. You can buy new decorations in November",
                points: 10
            },
            {
                text: "Walk by them until April.",
                points: 0
            },
            {
                text: "Pack them carefully and put them away.",
                points: 3
            },
            {
                text: "Become an atheist.",
                points: 7
            }
        ]
    },
    {
        question: "You observe a spider on your ceiling as you watch Netflix in the dark.",
        answers: [
            {
                text: "Kill the spider.",
                points: 5
            },
            {
                text: "Bring the spider outside.",
                points: 0
            },
            {
                text: "Ignore it.",
                points: 7
            },
            {
                text: "Yay! A new cat toy.",
                points: 10
            }
        ]
    },
    {
        question: "There's a supermassive black hole at the centre of our galaxy. If you could, you'd:",
        answers: [
            {
                text: "study it from a safe distance.",
                points: 5
            },
            {
                text: "fall in",
                points: 5
            },
            {
                text: "move to a different galaxy. It's gonna consume everything!",
                points: 0
            },
            {
                text: "harness its energy to power your spacecraft.",
                points: 10
            }
        ]
    },
    {
        question: "What actor has the most Academy Awards?",
        answers: [
            {
                text: "Meryl Streep",
                points: 0
            },
            {
                text: "Jack Nicholson",
                points: 10
            },
            {
                text: "Daniel Day-Lewis",
                points: 0
            },
            {
                text: "Katharine Hepburn",
                points: 0
            }
        ]
    },
    {
        question: "Where in the human body would you find the medulla oblongata?",
        answers: [
            {
                text: "Brain",
                points: 10
            },
            {
                text: "Reproductive System",
                points: 0
            },
            {
                text: "Endocrine System",
                points: 0
            },
            {
                text: "Upper GI",
                points: 0
            },
        ]
    },
    {
        question: "What is the spiciest chili pepper in the world?",
        answers: [
            {
                text: "Thai Ghost",
                points: 0
            },
            {
                text: "Carolina Repear",
                points: 5
            },
            {
                text: "Jersey Devil",
                points: 0
            },
            {
                text: "I don't eat spicy food.",
                points: 10
            }
        ]
    },
    {
        question: "What's the capital city of Tanzania?",
        answers: [
            {
                text: "Kinshasa",
                points: 0
            },
            {
                text: "Dodoma",
                points: 10
            },
            {
                text: "Dar es Salaam",
                points: 5
            },
            {
                text: "Mogadishu",
                points: 0
            }
        ]
    },
    {
        question: "What's the main ingredient in a boulevardier?",
        answers: [
            {
                text: "bourbon",
                points: 10
            },
            {
                text: "wood",
                points: 0
            },
            {
                text: "concrete",
                points: 0
            },
            {
                text: "gin",
                points: 5
            }
        ]
    },
    {
        question: "How long was the world's longest human fart?",
        answers: [
            {
                text: "1 minute, 37 seconds",
                points: 0
            },
            {
                text: "3 minutes, 3 seconds",
                points: 0
            },
            {
                text: "2 minutes, 42 seconds",
                points: 10
            },
            {
                text: "57 seconds",
                points: 0
            }
        ]
    },
    {
        question: "Where would you find the oldest pot plant in the world?",
        answers: [
            {
                text: "Kew Gardens, UK",
                points: 10
            },
            {
                text: "Amazon Rainforest, Manaus, Brazil",
                points: 0
            },
            {
                text: "Orto Botanico di Padova, Italy",
                points: 0
            },
            {
                text: "Humboldt County, USA",
                points: 0
            }
        ]
    }
    ]

var gameTimer = document.querySelector('#time-disp');
var currQuest = document.querySelector('#curr-quest');
var answer1 = document.querySelector('#ans1');
var answer2 = document.querySelector('#ans2');
var answer3 = document.querySelector('#ans3');
var answer4 = document.querySelector('#ans4');
var startBttn = document.querySelector('#start-button');
var scoreBttn = document.querySelector('#view-scores');
var userScore = "";

var timer = 240;
var qIndex = -1;
var timerInterval;

// Event listener to start quiz
startBttn.addEventListener('click', function startQuiz() {
    startTimer();
});

// start the timer
function startTimer() {
    timerInterval = setInterval(function() {
        timer --;
        gameTimer.textContent = timer;
    },1000)
};

scoreBttn.addEventListener('click', function loadScore(){
    console.log("I've also been clicked");
});

// display the next question
function nextQ() {
    if (++qIndex === VKquestions.length) {
    endQuiz();        
    }
    currQuest.textContent = VKquestions[qIndex].question;
    answer1.textContent = VKquestions[qIndex].answers[1].text;
    answer2.textContent = VKquestions[qIndex].answers[2].text;
    answer3.textContent = VKquestions[qIndex].answers[3].text;
    answer4.textContent = VKquestions[qIndex].answers[4].text;
};

function endQuiz() {
    clearInterval(timerInterval);
    if (timer < 0){
        timer = 0;
    }
    currQuest.textContent = "Your result will appear here."
};

function calcScore(){

};
