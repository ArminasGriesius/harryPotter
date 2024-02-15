function resetQuizScore() {
  score = 0;
  showText = 0;
  currentQuestion = 0;
}

function showQuestionsAndAnswers() {
  document.getElementById("questionNumber").innerText = `Question ${
    currentQuestion + 1
  }/10`;
  document.getElementById(currentQuestionId).innerText =
    questions[currentQuestion].question;
  document.getElementById("option1").innerText =
    questions[currentQuestion].options[0];
  document.getElementById("option2").innerText =
    questions[currentQuestion].options[1];
  document.getElementById("option3").innerText =
    questions[currentQuestion].options[2];
  document.getElementById("option4").innerText =
    questions[currentQuestion].options[3];
}

function playQuizEnd() {
  switch (true) {
    case score <= 4:
      badScore.play();
      break;
    case score > 4 && score < 7:
      middleScore.play();
      break;
    default:
      goodScore.play();
      break;
  }
}

function startQuizDisplay() {
  document.querySelector(".initQuiz").style.display = "none";
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("tryAgain").style.display = "none";
  document.getElementById("quizSection").style.display = "block";
  document.getElementById("quizHeadlineText").style.display = "block";
  harryPotterTheme.play();
  quizStarted = true;
}

function showQuizResult() {
  playQuizEnd();
  document.querySelector(".initQuiz").style.display = "flex";
  document.getElementById("initQuizBottomText").innerText =
    results[Math.round(showText)].result;
  document.getElementById(
    "initQuizTopText"
  ).innerText = `Your score is: ${score}/10`;
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("quizHeadlineText").style.display = "none";
  document.getElementById("tryAgain").style.display = "inline-block";
  harryPotterTheme.pause();
  harryPotterTheme.currentTime = 0;
  quizStarted = false;
}
function endQuiz() {
  if (currentQuestion < questions.length) {
    showQuestionsAndAnswers();
  } else if (currentQuestion == questions.length) {
    showQuizResult();
    resetQuizScore();
  }
}
function displayNextQuestion() {
  startQuizDisplay();
  endQuiz();
}

function resetButtons() {
  document.getElementById("option1").style.backgroundColor = "antiquewhite";
  document.getElementById("option2").style.backgroundColor = "antiquewhite";
  document.getElementById("option3").style.backgroundColor = "antiquewhite";
  document.getElementById("option4").style.backgroundColor = "antiquewhite";
  document.getElementById("option1").style.color = "black";
  document.getElementById("option2").style.color = "black";
  document.getElementById("option3").style.color = "black";
  document.getElementById("option4").style.color = "black";
}





