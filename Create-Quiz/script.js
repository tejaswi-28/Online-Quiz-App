let questionCount = 0;

function addQuestion() {
    questionCount++;
    const container = document.createElement("div");
    container.classList.add("question-container");
    container.innerHTML = `
        <label class="text" for="question-${questionCount}">Question ${questionCount}:</label>
        <input type="text" class="input" id="question-${questionCount}" required>
        <label class="text" for="option1-${questionCount}">Option 1:</label>
        <input type="text" class="input" id="option1-${questionCount}" required>
        <label class="text" for="option2-${questionCount}">Option 2:</label>
        <input type="text" class="input" id="option2-${questionCount}" required>
        <label class="text" for="option3-${questionCount}">Option 3:</label>
        <input type="text" class="input" id="option3-${questionCount}" required>
        <label class="text" for="option4-${questionCount}">Option 4:</label>
        <input type="text" class="input" id="option4-${questionCount}" required>
        <label class="text" for="correct-answer-${questionCount}">Correct Answer:</label>
        <select class="input" id="correct-answer-${questionCount}" required>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
            <option value="4">Option 4</option>
        </select>
    `;
    document.getElementById("quiz-form").insertBefore(container, document.querySelector("button[type='button']"));
}

document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const quizData = [];
    for (const entry of formData.entries()) {
        const [name, value] = entry;
        const [fieldName, questionNumber] = name.split("-");
        const questionIndex = parseInt(questionNumber) - 1;
        if (!quizData[questionIndex]) {
            quizData[questionIndex] = {};
        }
        if (fieldName === "question") {
            quizData[questionIndex][fieldName] = value;
        } else {
            if (!quizData[questionIndex]["options"]) {
                quizData[questionIndex]["options"] = [];
            }
            quizData[questionIndex]["options"].push(value);
        }
    }
    console.log("Quiz Data:", quizData);
});
