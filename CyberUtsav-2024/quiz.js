// Quiz Data
const quizData = {
  //basic science
  Science: [
    {
      question: "What is H2O?",
      choices: ["Water", "Oxygen", "hydrogen", "nitrogen"],
      answer: "Water",
    },
    {
      question: "which planet is known as red planet?",
      choices: ["venus", "mars", "jupiter", "saturn"],
      answer: "mars",
    },
    {
      question: "what is the powerhouse of the cell?",
      choices: ["nucleus", "mitochondria", "chloroplast", "ribosome"],
      answer: "mitochondria",
    },
  ],

  //basic maths
  Math: [
    { question: "What is 2 + 2?", choices: ["4", "22", "5", "3"], answer: "4" },
    {
      question: "Which of these is the prime number?",
      choices: ["7", "8", "10", "4"],
      answer: "7",
    },
    {
      question: "what is 25% of 200?",
      choices: ["25", "40", "50", "60"],
      answer: "50",
    },
  ],

  //basic history
  History: [
    {
      question: "who was the first president of united states?",
      choices: [
        "george washington",
        "thomas jeffron",
        "abaraham lincoln",
        "john adams",
      ],
      answer: "george washington",
    },
    {
      question: "which year did world war I begin?",
      choices: ["1912", "1914", "1916", "1991"],
      answer: "1914",
    },
    {
      question: "In which year did the titanic sink?",
      choices: ["1908", "1912", "1916", "1920"],
      answer: "1912",
    },
  ],

  //basic geography
  Geography: [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London"],
      answer: "Paris",
    },
    {
      question: "What is the longest river in the world?",
      choices: ["Amazon River", "Nile River", "Yangtze River", "Koshi River"],
      answer: "Nile River",
    },
    {
      question: "What is the smallest country in the world?",
      choices: ["Monaco", "Vatican City", "Nepal", "Nauru"],
      answer: "Vatican City",
    },
  ],

  //basic technology

  technology: [
    {
      question: "what does HTTP stands for?",
      choices: [
        "HyperText Transfer Protocol",
        "HyperTool Transfer Protocol",
        "High Transfer Text Protocol",
        "Hyper Transfer Technology Protocol",
      ],
      answer: "hypertext transfer protocol",
    },
    {
      question: ["what is the full form of RAM?"],
      choices: [
        "Read Access Memory",
        "Random Access Memory",
        "Read-Aligned Memory",
        "Random Aligned Memory",
      ],
      answer: "Random Access Memory",
    },
    {
      question: [
        "Which programming language is known as the mother of all languages?",
      ],
      choices: ["Python", "C", "Java", "Assembly"],
      answer: "java",
    },
  ],

  //basic literature
  Literature: [
    {
      question: "Who wrote the play Romeo and Juliet?",
      choices: [
        "charles darwin",
        "william shakespeare",
        "jane austen",
        "geaoge orwell",
      ],
      answer: "william shakespeare",
    },
    {
      question: ["In which novel would you find the character Atticus Finch?"],
      choices: [
        "The Great Gatsby",
        "To Kill a Mockingbird",
        "Pride and Prejudice",
        "1984",
      ],
      answer: "To Kill a Mockingbird",
    },
    {
      question: ["Which of these works was written by Mary Shelley?"],
      choices: ["dracula", "frankenstein", "the picture of dorain gray"],
      answer: "Frankenstein",
    },
  ],

  //basic sports
  Sports: [
    {
      question: "Who won the Ipl 2023?",
      choices: [
        "Mumbai Indians",
        "Chennai Super Kings",
        "Sunrises Hydrabad",
        "Gujrat Titans",
      ],
      answer: "chennai Super kings",
    },
    {
      question: "Who won the fifa World Cup in 2018",
      choices: ["Brazil", "Argentina", "France", "Germany"],
      answer: "France",
    },
    {
      question: "Which country has won the most Olympic gold Medals",
      choices: ["USA", "Russia", "Germany", "India"],
      answer: "USA",
    },
  ],
  //basic movies
  Movies: [
    {
      question: "Who directed the movie Titanic(1997)?",
      choices: [
        "Steven Spielberg",
        "James Cameron",
        "Martin Scorese",
        "Ridley Scott",
      ],
      answer: "James Cameron",
    },
    {
      question: "Which film features the quote, 'May the force be with you'?",
      choices: [
        "Star Trek",
        "The Matrix",
        "Star Wars",
        "Guardians of the galaxy",
      ],
      answer: "Star Wars",
    },
    {
      question: "What 1999 film featured the character 'Neo'?",
      choices: ["The Matrix", "Fight Club", "American Made", "The sixth Sense"],
      answer: "The Matrix",
    },
  ],
};

let currentCategory, questionIndex, lives, score;

// Load category
document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    startQuiz();
  });
});

// Start Quiz
function startQuiz() {
  lives = 3;
  questionIndex = 0;
  score = 0;
  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("quizContainer").classList.remove("hidden");
  loadQuestion();
  updateLives();
}

// Update Lives
function updateLives() {
  document.getElementById("livesContainer").textContent = `Lives: ${lives}`;
}

// Load Question
function loadQuestion() {
  const questionData = quizData[currentCategory][questionIndex];
  document.getElementById("questionContainer").textContent =
    questionData.question;
  document.getElementById("choicesContainer").innerHTML = "";

  questionData.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.classList.add("choice-btn"); // Styling buttons manually if needed
    button.addEventListener("click", () => checkAnswer(choice));
    document.getElementById("choicesContainer").appendChild(button);
  });
}

// Check Answer
function checkAnswer(choice) {
  const isCorrect = choice === quizData[currentCategory][questionIndex].answer;
  const feedbackElement = document.getElementById("feedback");

  if (isCorrect) {
    feedbackElement.textContent = "CORRECT";
    feedbackElement.classList.add("correct");
    score++;
  } else {
    feedbackElement.textContent = "INCORRECT";
    feedbackElement.classList.add("incorrect");
    lives--;
    updateLives();
    if (lives <= 0) {
      endQuiz();
      return;
    }
  }

  questionIndex++;

  setTimeout(() => {
    if (questionIndex < quizData[currentCategory].length) {
      loadQuestion();
    } else {
      endQuiz();
    }
    feedbackElement.textContent = "";
  }, 1000);
}

// End Quiz
function endQuiz() {
  const quizContainer = document.getElementById("quizContainer");
  quizContainer.innerHTML = `<h2>You scored ${score} out of ${quizData[currentCategory].length}!</h2>`;

  const restartButton = document.createElement("button");
  restartButton.textContent = "Restart Quiz";
  restartButton.style.padding = "10px 20px";
  restartButton.style.fontSize = "18px";
  restartButton.style.marginTop = "20px";
  restartButton.style.color = "rgb(116, 197, 248)";
  restartButton.style.backgroundColor = "rgb(0, 0, 0, 0.3)";
  restartButton.style.cursor = "pointer";
  restartButton.addEventListener("click", () => location.reload());

  quizContainer.appendChild(restartButton);
}
