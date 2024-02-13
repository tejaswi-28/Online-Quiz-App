// quiz app

const questions = [
    {
        question: "Which among the following is major component of Gobar Gas?",
        options: [
                "A. Butane",
                "B. Ethane",
                "C. Propane",
                "D. Methane"
        ],
        correctAnswer: 3
    },
    {
        question: "Who invented the telephone? ",
        options: [
            "A. Thomas Edison",
            "B. Alexander Graham Bell ",
            "C. Nikola Tesla",
            "D. James Watt"
        ],
        correctAnswer: 1
    },
    {
        question: "Who is known for inventing the light bulb?",
        options: [
            "A. Isaac Newton ",
            "B. Benjamin Franklin",
            "C. Albert Einstein",
            "D. Thomas Edison"
        ],
        correctAnswer: 3
    },
    {
        question: "What did Johannes Gutenberg invent? ",
        options: [
            "A. The steam engine ",
            "B. The printing press ",
            "C.  The telephone ",
            "D. The radio"
        ],
        correctAnswer: 1
    },
    {
        question: "The discovery of America is credited to",
        options: [
            "A. Christopher Columbus ",
            "B. Vasco da Gama",
            "C. Ferdinand Magellan ",
            "D. Marco Polo"
        ],
        correctAnswer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const nextButton = document.getElementById('next-btn');
const feedbackContainer = document.getElementById('feedback-container');
const scoreContainer = document.getElementById('score-container');

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h2 class="heading">${currentQuestion.question}</h2>
        <ul class="option-list">
            ${currentQuestion.options.map((option, index) => `<li><input type="radio" name="answer" value="${index}">${option}</li>`).join('')}
        </ul>
    `;
}

function showFeedback(isCorrect) {
    feedbackContainer.textContent = isCorrect ? "Correct!" : "Incorrect!";
    feedbackContainer.style.color = isCorrect ? "green" : "red";
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }
    const selectedOptionIndex = parseInt(selectedAnswer.value);
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === currentQuestion.correctAnswer;
    showFeedback(isCorrect);
    if (isCorrect) {
        score++;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        feedbackContainer.textContent = '';
    } else {
        showScore();
    }
}

function showScore() {
    questionContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreContainer.textContent = `Your Score: ${score} out of ${questions.length}`;
    scoreContainer.style.display = "block";
}

nextButton.addEventListener('click', function() {
    checkAnswer();
    nextQuestion();
});

showQuestion();
