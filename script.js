var scoreEl = document.getElementById('score');

function quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

quiz.prototype.getQuestionIndex = function() {
  return this.questons[this.questionIndex];
}

quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}

quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}

function question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

