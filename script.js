var leaderEl = document.getElementById('leaderBoard');
var MainEl = document.getElementById('main-page');
var scoreEl = document.getElementById('score');
var timeEl = document.getElementById('time');

var questionContainerElement = document.getElementById('question-container');
var answerButtonsElement = document.getElementById('answer-buttons');
var startContainerElement = document.getElementById('start-container');

var leaderText = document.getElementById('leaderBoard-text')
var startText = document.getElementById('start-text');
var questionElement = document.getElementById('question-text');

var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var inputEl = document.querySelector("#input-source");
var submitButton = document.getElementById('submit-btn');


var currentQuestionIndex;
var scoreAmount;
var timeRemain;

var shuffledQuestions, currentQuestionIndex = undefined;

var userText = [];

init();

function resetButton() {
  window.location.reload();
}

function startGame() {
  startButton.classList.add('hide');
  startText.classList.add('hide');
  scoreEl.classList.remove('hide');
  timeEl.classList.remove('hide');
  questionContainerElement.classList.remove('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  scoreAmount = 0;
  setNextQuestion();
  addScore();
  timer()
};

function timer() {
  var timeRemain = 90;
  var timer = setInterval(function () {
    timeEl.textContent = 'TIMER: ' + timeRemain;
    timeRemain--;
    if (timeRemain < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function addScore() {
  scoreEl.textContent = "SCORE: " + scoreAmount + " POINTS";
};


function setNextQuestion() {
  resetState() // removed lingering buttons
  showQuestion(shuffledQuestions[currentQuestionIndex])
};


function showQuestion(question) {
  //Array is question.question because quiz question text is labelled 'question'
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement('button');

    button.innerText = answer.text;
    button.classList.add('btn');

    //defines the correct value 
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    };

    button.addEventListener('click', selectAnswer)
    //have to append here to later for status class
    answerButtonsElement.appendChild(button)

  })
};

//removes double ups questions and answers
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
};

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

function hideRestart() {
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    nextButton.classList.remove('hide')
    wait(2000);
    showScores();
  }
}

//records which button is selected and checks dataset for correct/wrong
function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  });

  hideRestart();
}

function updateScore() {
  scoreAmount = scoreAmount + 5;
  addScore();
}

function udpateTime() {
  if (timeRemain > 0) {
    timeRemain - 10;
  }
};

function showScores() {
  questionContainerElement.classList.add('hide');
  nextButton.classList.add('hide');
  questionElement.innerText = ("Well Done!!");
  questionElement.style.fontSize = "6vw";

  var totalScore = document.createElement("P");
  totalScore.style.color = "red";
  totalScore.style.fontSize = "6vw";
  totalScore.innerHTML = "Your Total Score is " + scoreAmount;
  questionElement.appendChild(totalScore);

  inputEl.classList.remove('hide');
  submitButton.classList.remove('hide');

};

function displayMessage(type, message) {
  submitButton.textContent = message;
  submitButton.setAttribute("class", type);
}

function renderStats() {


  // Render a new li for each todo
  for (var i = 0; i < userText.length; i++) {
    var user = userText[i];


    var li = document.createElement("li");
    li.style.color = "white";
    li.textContent = user.userName + " | score: " + user.score;
    li.setAttribute("data-index", i);

    leaderText.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedScore = JSON.parse(localStorage.getItem("userText"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedScore !== null) {
    userText = storedScore;
  }
  // Render todos to the DOM
  renderStats();
}


function storeText() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("userText", JSON.stringify(userText));
}

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  var userDetails = {
    userName: inputEl.value.trim(),
    score: scoreAmount,
  };

  // validate the fields
  if (userDetails.userName === "") {
    displayMessage("error", "First name cannot be blank");
  }

  userText.push(userDetails);
  inputEl.value = "";

  storeText();
  GameOver();

});

function GameOver() {
  questionContainerElement.classList.add('hide');
  leaderText.classList.remove('hide');
  submitButton.classList.add('hide');
  nextButton.classList.add('hide');
  inputEl.classList.add('hide');
  startButton.classList.add('hide');
  startText.classList.add('hide');
  leaderText.innerText = ("Top Score // Leaderboard");
  leaderText.style.fontSize = "2vw";
  leaderText.style.color = "green";


  storeText();
  renderStats();
}

//sets dataSet
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong')
  }
}
//clears dataSet
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function pointsAndTime(event) {
  var element = event.target;
  if (element.matches("button")) {
    var state = element.getAttribute("data-correct");
    if (state === "true") {
      updateScore();
    } else {
      udpateTime();
    }
  };

};

var questions = [{
    question: 'Ringu released in Japan 1998 was based on which famous story?',
    answers: [{
        text: 'The Two Mouth Woman',
        correct: false
      },
      {
        text: 'The Dish Mansion at Bancho',
        correct: true
      },
      {
        text: 'Shellfish Ogre',
        correct: false
      },
      {
        text: 'Abondoned Old Woman, Ubasute',
        correct: false
      },
    ]
  },
  {
    question: 'In the fable the Slit Mouth Woman fable, Kuchisaki Onna, what is the right answer to her question "Am I pretty?"',
    answers: [{
        text: 'Yes',
        correct: false
      },
      {
        text: 'No',
        correct: false
      },
      {
        text: 'Average',
        correct: true
      },
      {
        text: 'Run away!',
        correct: false
      }
    ]
  },
  {
    question: 'Dark Water release in 2002 was based on the true story about a woman who disappeared in which hotel elevator?',
    answers: [{
        text: 'Cecil Hotel',
        correct: true
      },
      {
        text: 'Hotel Aeris',
        correct: false
      },
      {
        text: 'Orient Hotel',
        correct: false
      },
      {
        text: 'Park Front Hotel',
        correct: false
      }
    ]
  },
  {
    question: "Kiyoshi Kurosawa's film Kairo about the dead returning to the world through computers was a metaphor for which historic event in Japan",
    answers: [{
        text: 'Atomic Bomb aftermath of 1945',
        correct: true
      },
      {
        text: 'Japan Open Borders 1954',
        correct: false
      },
      {
        text: 'Global Financial Crisis 1992',
        correct: false
      },
      {
        text: 'The Great Hanshin Earthquake 1995',
        correct: false
      },
    ]
  },
  {
    question: "House directed by Nobuhiko Obayashi in 1977 was famous for its use of psychodelic monster creation and horror. Who wrote the story?",
    answers: [{
        text: "the director",
        correct: false
      },
      {
        text: "the director's wife",
        correct: false
      },
      {
        text: "the director's neighbour",
        correct: false
      },
      {
        text: "the director's son",
        correct: true
      },
    ]
  }
];

leaderEl.addEventListener('click', GameOver);
MainEl.addEventListener('click', resetButton);
answerButtonsElement.addEventListener('click', pointsAndTime);
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});
