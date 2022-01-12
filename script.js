const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionElementContainer = document.getElementById('question-container');
let randomQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answers-btn')

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  console.log("Started");
  startButton.classList.add('hide')
  randomQuestions = questions.sort(()=> Math.random() - .5)
  currentQuestionIndex = 0
  questionElementContainer.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtons.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}


function selectAnswer(e) {
  const selectButton = e.target
  const correct = selectButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = "Restart"
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "Who is the best midfielder?",
    answers: [
      {text: "Pogba", correct: true },
      {text: "Jorginho", correct: false},
      {text: "Grealish", correct: false},
      {text: "Fabinho", correct: false}
    ]
  },
  {
    question: "Who is the best 3 point shooter?",
    answers: [
      {text: "LeBron James", correct: false },
      {text: "Kevin Durant", correct: false},
      {text: "Stephen Curry", correct: true},
      {text: "Giannis Antetokounmpo", correct: false}
    ]
  },
  {
    question: "Who has the best handles in the NBA?",
    answers: [
      {text: "James Harden", correct: false },
      {text: "Kevin Durant", correct: false},
      {text: "Kyrie Irving", correct: true},
      {text: "Chris Paul", correct: false}
    ]
  },
  {
    question: "Whch team won the Larry O'brian in 2019?",
    answers: [
      {text: "Golden State Warriors", correct: false },
      {text: "Toronto Raptors", correct: true},
      {text: "Los Angeles Lakers", correct: false},
      {text: "Milwaukee Bucks", correct: false}
    ]
  },
  {
    question: "What the most popular programming language?",
    answers: [
      {text: "C++", correct: false },
      {text: "JavaScript", correct: false},
      {text: "Python", correct: true},
      {text: "Php", correct: false}
    ]
  },
  {
    question: "Which player is known as the 'Greek Freak'?",
    answers: [
      {text: "LeBron James", correct: false },
      {text: "Kyle Kuzma", correct: false},
      {text: "Stephen Curry", correct: false},
      {text: "Giannis Antetokounmpo", correct: true}
    ]
  },
  {
    question: "Who won the MVP last season?",
    answers: [
      {text: "Nikola Jokic", correct: true },
      {text: "Steph Curry", correct: false},
      {text: "Joel Embiid", correct: false},
      {text: "Giannis Antetokounmpo", correct: false}
    ]
  }
]
