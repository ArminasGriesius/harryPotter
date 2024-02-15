let quizStarted = false;
let questionAnswered = false;

const currentQuestionId = "quizQuestion";

const harryPotterTheme = new Audio("files/HPTheme.mp3");
const correct = new Audio("files/Correct.mp3");
correct.volume = 0.3;
const wrong = new Audio("files/Wrong.mp3");
wrong.volume = 0.3;
const goodScore = new Audio("files/GoodScore.mp3");
goodScore.volume = 0.3;
const badScore = new Audio("files/BadScore.mp3");
badScore.volume = 0.5;
const middleScore = new Audio("files/MiddleScore.mp3");
middleScore.volume = 0.5;

document.getElementById("tryAgain").style.display = "none";

let score = 0;
let showText = 0;
let currentQuestion = 0;

const questions = [
  {
    question:
      "When Ron’s wand backfired, what did he unfortunately and hilariously vomit?",
    options: ["Woodlice", "Ants", "Snails", "Slugs"],
    answer: "Slugs",
  },
  {
    question:
      "In Philosopher’s Stone, when Dumbledore visited Harry in the hospital wing, what flavour Bertie Bott’s Every-Flavour Bean did he have the misfortune of eating? ",
    options: ["Mud", "Broccoli", "Earwax", "Bogey"],
    answer: "Earwax",
  },
  {
    question:
      "As punishment, Mad-Eye Moody turned Malfoy into what creature and took him for a bounce along the corridors of Hogwarts?",
    options: ["A ferret", "A rat", "A shrew", "A hamster"],
    answer: "A ferret",
  },
  {
    question:
      "What magical creatures were let loose in Lockhart’s first lesson and hoisted Neville up into the air by his ears?",
    options: ["Augureys", "Billywigs", "Fairies", "Cornish pixies"],
    answer: "Cornish pixies",
  },
  {
    question: "What was the nickname that Snape gave himself at school?",
    options: [
      "Potion Pioneer",
      "Half-Blood Prince",
      "Prince of Endless Darkness",
      "Pure-Blood King",
    ],
    answer: "Half-Blood Prince",
  },
  {
    question: "Where is the Slytherin common room located?",
    options: [
      "Next to the kitchen",
      "In the West Tower",
      "The Dungeons",
      "Below the Great Hall",
    ],
    answer: "The Dungeons",
  },
  {
    question: "How many staircases does Hogwarts have?",
    options: ["142", "143", "163", "152"],
    answer: "142",
  },
  {
    question:
      "What is the name of the book Hermione supposes Voldemort used to learn about Horcruxes?",
    options: [
      "Magik Moste Evil",
      "Secret of the Darkest Art",
      "A Guide to Medieval Sorcery",
      "Most Potente Potions",
    ],
    answer: "Secret of the Darkest Art",
  },
  {
    question:
      "Which Hogwarts professor was rumoured to be a duelling champion in their youth?",
    options: [
      "Minerva McGonagall",
      "Severus Snape",
      "Filius Flitwick",
      "Horace Slughorn",
    ],
    answer: "Filius Flitwick",
  },
  {
    question:
      "Which creatures pull the carriages that take students from the Hogwarts Express to the Castle?",
    options: ["Hippogriffs", "Thestrals", "Gentaurs", "Manticores"],
    answer: "Thestrals",
  },
];

const results = [
  {
    result: "You should at least watch the movies",
  },
  {
    result: "This was not Lord of the Rings quiz, sorry",
  },
  {
    result: "Not quite this time",
  },
  {
    result: "Not great, not terrible",
  },
  {
    result: "Not bad!!",
  },
  {
    result: "Congradulations! You are a TRUE Harry Potter fan!!",
  },
];

function checkAnswer(userAnswer) {
  if (questionAnswered) {
    return;
  }

  const selectedButtons = document.querySelectorAll(".answerOption");
  const correctAnswer = questions[currentQuestion].answer;
  var answerOptions = document.getElementsByClassName("answerOption");
  Array.from(answerOptions).forEach(function (option) {
    option.style.cursor = "not-allowed";
  });

  function processAnswer() {
    selectedButtons.forEach((button) => {
      if (button.innerText === userAnswer) {
        if (userAnswer === correctAnswer) {
          questionAnswered = true;
          button.style.backgroundColor = "green";
          button.style.color = "white";
          correct.play();
          score++;
          showText += 0.5;
        } else {
          questionAnswered = true;
          button.style.backgroundColor = "red";
          const correctButton = Array.from(selectedButtons).find(
            (button) => button.innerText === correctAnswer
          );

          correctButton.style.backgroundColor = "green";
          correctButton.style.color = "white";

          button.style.color = "antiquewhite";
          wrong.play();
        }
      }
    });
  }
  processAnswer();

  function goToNextQuestion() {
    setTimeout(() => {
      Array.from(answerOptions).forEach(function (option) {
        option.style.cursor = "pointer";
      });
      questionAnswered = false;
      currentQuestion++;
      displayNextQuestion(questions[currentQuestion]);
      resetButtons();
    }, 1500);
  }
  goToNextQuestion();
}
