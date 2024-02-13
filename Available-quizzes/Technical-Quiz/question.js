// const questions = [
//     {
//         // numb: 1,
//         question: "What does HTML stands for ?",
//         // answer: "C. HyperText Markup Language",
//         answers: [
//             {text: "A. HighText Machine Language", correct: false},
//             {text: "B. HyperText and links Markup Language", correct: false},
//             {text: "C. HyperText Markup Language", correct: true},
//             {text: "D. Tejaswi", correct: false}
//             // None of these
//         ]
//     },
//     {
//         // numb: 2,
//         question: "The correct sequence of HTML tags for starting a webpage",
//         // answer: "D. HTML, Head, Title, Body",
//         answers: [
//             {text: "A. Head, Title, HTML, body", correct: false},
//             {text: "B. HTML, Body, Title, Head", correct: false},
//             {text: "C. HTML, Head, Title, Body", correct: false},
//             {text: "D. HTML, Head, Title, Body", correct: true}
//         ]
//     },
//     {
//         // numb: 3,
//         question: "Which of the following element is responsible for making the text bold in HTML?",
//         // answer: "C. <b>",
//         answers: [
//             {text: "A. <pre>", correct: false},
//             {text: "B. <a>", correct: false},
//             {text: "C. <b>", correct: true},
//             {text: "D. <br>", correct: false}
//         ]
//     },
//     {
//         // numb: 4,
//         question: "Which of the following tag is used to insert a line-break in HTML?",
//         // answer: "A. <br>",
//         answers: [
//             {text: "A. <br>", correct: true},
//             {text: "B. <a>", correct: false},
//             {text: "C. <pre>", correct: false},
//             {text: "D. <b>", correct: false}
//         ]
//     },
//     {
//         // numb: 5,
//         question: "How to create an unordered list in HTML?",
//         // answer: "A. <ul>",
//         answers: [
//             {text: "A. <ul>", correct: true},
//             {text: "B. <ol>", correct: false},
//             {text: "C. <li>", correct: false},
//             {text: "D. <i>", correct: false}
//         ]
//     }
//     // {
//     //     numb: 5,
//     //     question: "",
//     //     answer: "",
//     //     options: [
//     //         "A.",
//     //         "B.",
//     //         "C.",
//     //         "D."
//     //     ]
//     // },
// ];

// const questionElement = document.getElementById("question-text");
// const answerElements = document.getElementById("option-list");
// const nextBtn = document.getElementById("next-btn");

// let currIndex = 0;
// let score = 0;

// function startQuiz(){
//     currIndex = 0;
//     score=0;
//     nextBtn.innerHTML = "Next";
//     showQuestion();
// }
// function showQuestion(){
//     resetState();
//     let currQuestion = questions[currIndex];
//     let questionNum = currIndex + 1;
//     questionElement.innerHTML = questionNum + ". " + currQuestion.question;

//     currQuestion.answers.forEach(answer => {
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("option");
//         answerElement.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// }

// function resetState(){
//     nextBtn.style.display = "none";
//     while(answerElements.firstChild){
//         answerElements.removeChild(answerElements.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === "true";
//     if (isCorrect) {
//         selectedBtn.classList.add("correct");
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
// }

// startQuiz();



// quiz app

const questions = [
    {
        question: "What does HTML stands for ?",
        options: [
                "A. HighText Machine Language",
                "B. HyperText and links Markup Language",
                "C. HyperText Markup Language",
                "D. None of these"
        ],
        correctAnswer: 2
    },
    {
        question: "What does CSS stands for?",
        options: [
            "A. Cascade style sheets",
            "B. Color and style sheets",
            "C. Cascading style sheets",
            "D. None of the above"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the full form of SQL?",
        options: [
            "A. Structured Query List",
            "B. Structure Query Language",
            "C. Sample Query Language",
            "D. None of these."
        ],
        correctAnswer: 1
    },
    {
        question: "What is the full form of DBMS?",
        options: [
            "A. Data of Binary Management System",
            "B. Database Management System",
            "C. Database Management Service",
            "D. Data Backup Management System"
        ],
        correctAnswer: 1
    },
    {
        question: "What does PHP stands for?",
        options: [
            "A. Hypertext Preprocessor",
            "B. Pretext Hypertext Preprocesso",
            "C. None of the above",
            "D. Personal Home Processor"
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
