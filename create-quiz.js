// document.addEventListener("DOMContentLoaded", () => {
//     const addQuestionBtn = document.querySelector(".add-question");
//     const saveQuizBtn = document.querySelector(".save-quiz");
//     const quizForm = document.getElementById("quizForm");
//     const questionsContainer = document.getElementById("questionsContainer");

//     let questions = [];

//     addQuestionBtn.addEventListener("click", () => {
//         addQuestionBlock();
//     });

//     quizForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         saveQuiz();
//     });

//     function addQuestionBlock() {
//         const questionBlock = document.createElement("div");
//         questionBlock.classList.add("question-block");
//         questionBlock.innerHTML = `
//             <label for="quiz-question">Question:</label>
//             <input type="text" id="quiz-question" required>
//             <label for="quiz-options">Options (comma-separated):</label>
//             <input type="text" id="quiz-options" required>
//             <label for="quiz-answer">Correct Answer:</label>
//             <input type="text" id="quiz-answer" required>
//         `;
//         questionsContainer.appendChild(questionBlock);
//     }

//     function saveQuiz() {
//         const title = document.getElementById("quiz-title").value;
//         const questionBlocks = document.querySelectorAll(".question-block");

//         questionBlocks.forEach(block => {
//             const question = block.querySelector("#quiz-question").value;
//             const options = block.querySelector("#quiz-options").value.split(",");
//             const correctAnswer = block.querySelector("#quiz-answer").value;

//             questions.push({
//                 question,
//                 options,
//                 correctAnswer
//             });
//         });

//         const quiz = {
//             title,
//             questions
//         };

//         // Save the quiz to local storage or send it to the server
//         localStorage.setItem("quiz", JSON.stringify(quiz));
//         alert("Quiz saved successfully!");

//         // Reset the form
//         quizForm.reset();
//         questionsContainer.innerHTML = '';
//         addQuestionBlock(); // Add the first question block again
//     }

//     // Initialize with one question block
//     addQuestionBlock();
// });


document.addEventListener("DOMContentLoaded", () => {
    const addQuestionBtn = document.querySelector(".add-question");
    const saveQuizBtn = document.querySelector(".save-quiz");
    const quizForm = document.getElementById("quizForm");
    const questionsContainer = document.getElementById("questionsContainer");

    let questions = [];

    addQuestionBtn.addEventListener("click", () => {
        addQuestionBlock();
    });

    quizForm.addEventListener("submit", (event) => {
        event.preventDefault();
        saveQuiz();
    });

    function addQuestionBlock() {
        const questionBlock = document.createElement("div");
        questionBlock.classList.add("question-block");
        questionBlock.innerHTML = `
            <label for="quiz-question">Question:</label>
            <input type="text" id="quiz-question" required>
            <label for="quiz-options">Options (comma-separated):</label>
            <input type="text" id="quiz-options" required>
            <label for="quiz-answer">Correct Answer:</label>
            <input type="text" id="quiz-answer" required>
        `;
        questionsContainer.appendChild(questionBlock);
    }

    function saveQuiz() {
        const title = document.getElementById("quiz-title").value;
        const questionBlocks = document.querySelectorAll(".question-block");

        questionBlocks.forEach(block => {
            const question = block.querySelector("#quiz-question").value;
            const options = block.querySelector("#quiz-options").value.split(",");
            const correctAnswer = block.querySelector("#quiz-answer").value;

            questions.push({
                question,
                options,
                correctAnswer
            });
        });

        const quiz = {
            title,
            questions
        };

        // Save the quiz to local storage or send it to the server
        localStorage.setItem("quiz", JSON.stringify(quiz));
        alert("Quiz saved successfully!");

        // Reset the form
        quizForm.reset();
        questionsContainer.innerHTML = '';
        addQuestionBlock(); // Add the first question block again
    }

    // Initialize with one question block
    addQuestionBlock();
});
