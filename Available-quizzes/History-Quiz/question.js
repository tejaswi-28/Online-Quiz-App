// quiz app

const questions = [
    {
        question: "Chhatrapati Shivaji crowned himself at?",
        options: [
                "A. Raigad",
                "B. Pune",
                "C. Satara",
                "D. Rajgad"
        ],
        correctAnswer: 0
    },
    {
        question: "Chhtrapati Shivaji submitted to Jai sSngh and signed the treaty of?",
        options: [
            "A. Purandar",
            "B. Konkar",
            "C. Surat",
            "D. Pune"
        ],
        correctAnswer: 0
    },
    {
        question: "Chhatrapati Shivaji's Agra adventure was planned by?",
        options: [
            "A. Afzal Khan",
            "B. Shayista Khan",
            "C. Jai Singh",
            "D. Mir Jumla"
        ],
        correctAnswer: 2
    },
    {
        question: "In which year, Shivaji Maharaj was crowned as Chhatrapati?",
        options: [
            "A. 1608",
            "B. 1646",
            "C. 1674",
            "D. 1710"
        ],
        correctAnswer: 2
    },
    {
        question: "Who was the second founder of Maratha Kingdom?",
        options: [
            "A. Maharani Tarabai",
            "B. Peshwa Bajirao",
            "C. Sambhaji Raje",
            "D. Peshwa Balaji Vishwanath"
        ],
        correctAnswer: 3
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
