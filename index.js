const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  return container = document.querySelector('.question-container').innerHTML = question['questionText']
};

function askQuestionThen(time){
  question = questions[0];
  const newQuestion = appendQuestion(question);
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(newQuestion);
    },
    time)
  })
};

function removeQuestion(){
  let container = document.querySelector('.question-container').innerHTML = ''
};

function askQuestionThenRemoveQuestion(time){
  return askQuestionThen(time).then(removeQuestion)
};

function trueAndFalseButtons() {
  return button = document.querySelectorAll('.btn.center-align')
  // return button = document.querySelector('.true-false-list').querySelectorAll('.btn')
};

function toggleTrueAndFalseButtons() {
   trueAndFalseButtons().forEach(button => {
     button.classList.toggle('hide')
     console.log(button)
  })
};

function guy() {
  toggleTrueAndFalseButtons()
  askQuestionThenRemoveQuestion(5000)
}

function displayQuestionOnClick() {
  let displayQuestion = document.querySelector('.waves-effect.waves-light.btn')
  return displayQuestion.addEventListener('click', guy)
};
