// Consolidated Quiz Data
const quizData = {
    Science: [
      {
        question: "What is H2O?",
        choices: ["Water", "Oxygen", "Hydrogen", "Nitrogen"],
        answer: "Water",
      },
      {
        question: "Which planet is known as the Red Planet?",
        choices: ["Venus", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "What is the powerhouse of the cell?",
        choices: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        answer: "Mitochondria",
      },
      {
        question: "What is the hardest naturally occuring substance on Earth?",
        choices: ["Gold", "Diamond", "Iron", "Quartz"],
        answer: "Diamond",
      },
    ],
    Math: [
      {
        question: "What is 2 + 2?",
        choices: ["4", "22", "5", "3"],
        answer: "4",
      },
      {
        question: "Which of these is the prime number?",
        choices: ["7", "8", "10", "4"],
        answer: "7",
      },
      {
        question: "What is 25% of 200?",
        choices: ["25", "40", "50", "60"],
        answer: "50",
      },
      {
        question: "What is the square root of 144?",
        choices: ["1o", "12", "14", "16"],
        answer: "12",
      },
    ],
    History: [
      {
        question: "Who was the first president of the United States?",
        choices: [
          "George Washington",
          "Thomas Jefferson",
          "Abraham Lincoln",
          "John Adams",
        ],
        answer: "George Washington",
      },
      {
        question: "Which year did World War I begin?",
        choices: ["1912", "1914", "1916", "1991"],
        answer: "1914",
      },
      {
        question: "In which year did the Titanic sink?",
        choices: ["1908", "1912", "1916", "1920"],
        answer: "1912",
      },
      {
        question: "Who was the famous queen of ancient Egypt?",
        choices: ["Cleopatra", "Nefertiti", "Hatsheput", "Queen Victoria"],
        answer: "50",
      },
    ],
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
      {
        question: "What is the capital of Japan?",
        choices: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
        answer: "Tokyo",
      },
    ],
    Technology: [
      {
        question: "What does HTTP stand for?",
        choices: [
          "HyperText Transfer Protocol",
          "HyperTool Transfer Protocol",
          "High Transfer Text Protocol",
          "Hyper Transfer Technology Protocol",
        ],
        answer: "HyperText Transfer Protocol",
      },
      {
        question: "What is the full form of RAM?",
        choices: [
          "Read Access Memory",
          "Random Access Memory",
          "Read-Aligned Memory",
          "Random Aligned Memory",
        ],
        answer: "Random Access Memory",
      },
      {
        question: "Which programming language is known as the mother of all languages?",
        choices: ["Python", "C", "Java", "Assembly"],
        answer: "Java",
      },
      {
        question: "What year was the first I-Phone released?",
        choices: ["2006", "2009", "2007", "2005"],
        answer: "2007",
      },
    ],
    Literature: [
      {
        question: "Who wrote the play Romeo and Juliet?",
        choices: [
          "Charles Darwin",
          "William Shakespeare",
          "Jane Austen",
          "George Orwell",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "In which novel would you find the character Atticus Finch?",
        choices: [
          "The Great Gatsby",
          "To Kill a Mockingbird",
          "Pride and Prejudice",
          "1984",
        ],
        answer: "To Kill a Mockingbird",
      },
      {
        question: "Which of these works was written by Mary Shelley?",
        choices: ["Dracula", "Frankenstein", "The Picture of Dorian Gray"],
        answer: "Frankenstein",
      },
      {
        question: "Which novel begins with the famous line: 'Call me Ishmael'?",
        choices: ["Moby-Dick", "The Catcher in the Rye", "Hamlet", "The Old Man and the Sea"],
        answer: "Moby-Dick",
      },
    ],
    Sports: [
      {
        question: "Who won the IPL 2023?",
        choices: [
          "Mumbai Indians",
          "Chennai Super Kings",
          "Sunrisers Hyderabad",
          "Gujarat Titans",
        ],
        answer: "Chennai Super Kings",
      },
      {
        question: "Who won the FIFA World Cup in 2018?",
        choices: ["Brazil", "Argentina", "France", "Germany"],
        answer: "France",
      },
      {
        question: "Which country has won the most Olympic gold medals?",
        choices: ["USA", "Russia", "Germany", "India"],
        answer: "USA",
      },
      {
        question: "Who is the all-time top scorer in the history of the UEFA Champions League?",
        choices: ["Cristiano Ronaldo", "Lamine Yamal", "Raul", "Harry Kane"],
        answer: "Cristiano Ronaldo",
      },
    ],
    Movies: [
      {
        question: "Who directed the movie Titanic (1997)?",
        choices: [
          "Steven Spielberg",
          "James Cameron",
          "Martin Scorsese",
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
          "Guardians of the Galaxy",
        ],
        answer: "Star Wars",
      },
      {
        question: "What 1999 film featured the character 'Neo'?",
        choices: ["The Matrix", "Fight Club", "American Made", "The Sixth Sense"],
        answer: "The Matrix",
      },
      {
        question: "Which movie features the character 'Forrest Gump'?",
        choices: ["The Green Mile", "Forrest Gump", "Saving Private Ryan", "The Shawshank Redemption"],
        answer: "Forrest Gump",
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
    document.getElementById("questionContainer").textContent = questionData.question;
    document.getElementById("choicesContainer").innerHTML = "";
  
    questionData.choices.forEach((choice) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.classList.add("choice-btn");
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