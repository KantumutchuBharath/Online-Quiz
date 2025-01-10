// Sample questions for the quiz
const questions = [
    { question: "Who was the first President of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
    { question: "What is the capital of France?", options: ["Rome", "Madrid", "Berlin", "Paris"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "In which year did World War II end?", options: ["1942", "1945", "1939", "1950"], answer: "1945" },
    { question: "What is the largest ocean in the world?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
    { question: "Who wrote the play 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"], answer: "William Shakespeare" },
    { question: "How many continents are there?", options: ["Five", "Six", "Seven", "Eight"], answer: "Seven" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "South Korea", "Japan", "Thailand"], answer: "Japan" },
    { question: "What is the currency of the United Kingdom?", options: ["Dollar", "Euro", "Pound Sterling", "Franc"], answer: "Pound Sterling" },
    { question: "Which planet is the largest in our solar system?", options: ["Earth", "Jupiter", "Saturn", "Neptune"], answer: "Jupiter" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Cucumber", "Avocado", "Spinach"], answer: "Avocado" },
    { question: "Which element has the chemical symbol ‘O’?", options: ["Oxygen", "Gold", "Iron", "Helium"], answer: "Oxygen" },
    { question: "Who painted the Mona Lisa?", options: ["Michelangelo", "Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh"], answer: "Leonardo da Vinci" },
    { question: "What is the hardest natural substance on Earth?", options: ["Iron", "Gold", "Diamond", "Quartz"], answer: "Diamond" },
    { question: "Which river is the longest in the world?", options: ["Amazon", "Yangtze", "Mississippi", "Nile"], answer: "Nile" },
    { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], answer: "Vatican City" },
    { question: "Which organ in the human body is primarily responsible for detoxification?", options: ["Kidneys", "Stomach", "Liver", "Lungs"], answer: "Liver" },
    { question: "In which year did man first land on the moon?", options: ["1965", "1969", "1972", "1975"], answer: "1969" },
    { question: "Which country hosted the 2016 Summer Olympics?", options: ["China", "Brazil", "Japan", "South Africa"], answer: "Brazil" },
    { question: "What is the chemical formula for water?", options: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" }
];

let currentQuestionIndex = 0; // Track the current question index
let score = 0; // Track the user's score

// Function to simulate user login
function loginUser(event) {
    event.preventDefault();
    alert("Login successful (simulated). Redirecting to quiz page...");
    document.location.href = 'quiz.html';
}

// Function to simulate user registration
function registerUser(event) {
    event.preventDefault();
    alert("Registration successful (simulated). Redirecting to login page...");
    document.location.href = 'register.html';
}

// Function to start the quiz
function startQuiz() {
    document.getElementById('quiz').style.display = 'block'; // Show the quiz container
    displayQuestion(); // Display the first question
}

// Function to display the current question
function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = ''; // Clear previous question

    const questionElement = document.createElement('p');
    questionElement.innerText = questions[currentQuestionIndex].question;
    questionContainer.appendChild(questionElement); // Add the question to the container

    questions[currentQuestionIndex].options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.className = 'option';
        optionElement.innerText = option;
        optionElement.onclick = () => checkAnswer(option); // Set click handler for each option
        questionContainer.appendChild(optionElement); // Add options to the container
    });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll("button.option");

    // Mark options as correct or wrong
    optionButtons.forEach(button => {
        if (button.innerText === question.answer) {
            button.classList.add("correct");
        } else if (button.innerText === selectedOption) {
            button.classList.add("wrong");
        }
        button.classList.add("disabled");
    });

    if (selectedOption === question.answer) {
        score++; // Increment score for correct answer
    }

    currentQuestionIndex++; // Move to the next question
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            displayQuestion(); // Display next question
        } else {
            document.getElementById("result").innerText = "Quiz completed! Your score: " + score + "/" + questions.length;
        }
    }, 1000); // Delay before showing the next question
}

// Function to submit the quiz and show results
function submitQuiz() {
    alert("Quiz submitted! Your final score is " + score + "/" + questions.length);
}