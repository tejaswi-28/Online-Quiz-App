// quiz app

const questions = [
    {
        question: "Sub capital of Maharashtra State is ?",
        options: [
                "A. Aurangabad",
                "B. Nagpur",
                "C. Pune",
                "D. Mumbai"
        ],
        correctAnswer: 1
    },
    {
        question: "Which is the most important river of Maharashtra that is a lifeline of whole South Maharashtra? ",
        options: [
            "A. Krishna",
            "B. Koyna",
            "C. Wardha",
            "D. Warna"
        ],
        correctAnswer: 0
    },
    {
        question: "How many Tehsils are there in Maharashtra?",
        options: [
            "A. 958 Talukas (Tehsils) ",
            "B. 540 Talukas (Tehsils)",
            "C. 358 Talukas (Tehsils)",
            "D. 670 Talukas (Tehsils)"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Maharashtra? ",
        options: [
            "A. Mumbai ",
            "B. Pune ",
            "C. Nagpur ",
            "D. Thane"
        ],
        correctAnswer: 0
    },
    {
        question: "Which is the second largest city of Maharashtra?",
        options: [
            "A. Nagpur",
            "B. Aurangabad",
            "C. Nashik",
            "D. Pune"
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
