document.addEventListener("DOMContentLoaded", function () {
    // Assuming you have an array of quizzes
    const quizzes = [
        // { id: 1, name: "General Knowledge Quiz" },
        // { id: 2, name: "Science Quiz" },
        // { id: 3, name: "History Quiz" },
        // { id: 4, name: "Technical Quiz" },
        // Add more quizzes as needed
    ];

    const quizListContainer = document.getElementById("quiz-list-container");

    // Populate the quiz list
    quizzes.forEach((quiz) => {
        const listItem = document.createElement("li");
        listItem.textContent = quiz.name;

        // Add a click event listener to each list item
        listItem.addEventListener("click", () => {

            // Redirect to the quiz page or perform any other action
            console.log(`User clicked on ${quiz.name}`);
        });

        quizListContainer.appendChild(listItem);
    });
});
