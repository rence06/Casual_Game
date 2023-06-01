const triviaData = [
  {
    question: "1. What is the capital of France?",
    choices: ["Paris", "London", "Madrid", "Berlin"],
    correctAnswer: 0
  },
  {
    question: "2. What is the largest planet in our solar system?",
    choices: ["Mars", "Jupiter", "Earth", "Venus"],
    correctAnswer: 1
  },
  {
    question: "3. In what type of matter are atoms most tightly packed?",
    choices: ["Cell", "Gas", "Liquids", "Solids"],
    correctAnswer: 3
  },
  {
    question: "4. What is the hottest planet in the solar system?",
    choices: ["Pluto", "Mars", "Venus", "Jupiter"],
    correctAnswer: 2
  },
  {
    question: "5. Which of Newton’s Laws states that ‘for every action, there is an equal and opposite reaction?What is the largest planet in our solar system?",
    choices: ["The first law of motion", "The second law of motion", "The third law of motion", "The fourth law of motion"],
    correctAnswer: 2
  },
  {
    question: "6. What is the nearest planet to the sun?",
    choices: ["Mercury", "Mars", "Jupiter", "Pluto"],
    correctAnswer: 0
  },
  {
    question: "7. How many teeth does an adult human have?",
    choices: ["37", "31", "32", "30"],
    correctAnswer: 2
  },
  {
    question: "8. What's the largest bone in the human body?",
    choices: ["Axial", "Humerus", "Sacrum", "Femur"],
    correctAnswer: 3
  },
  {
    question: "9. How long is an Olympic swimming pool (in meters)?",
    choices: ["60 meters", "50 meters", "30 meters", "70 meters"],
    correctAnswer: 1
  },
  {
    question: "10. Which country do cities of Perth, Adelade & Brisbane belong to?",
    choices: ["Australia", "Germany", "Italy", "Canada"],
    correctAnswer: 0
  },
  {
    question: "11. What geometric shape is generally used for stop signs?",
    choices: ["Pentagon", "Hexagon", "Octagon", "Decagon"],
    correctAnswer: 2
  },
  {
    question: '12. What is "cynophobia"?',
    choices: ["Fear of dogs", "Fear of cats", "Fear of chicken", "Fear of wolf"],
    correctAnswer: 0
  },////////
  {
    question: "13. What is the name of the man who launched eBay back in 1995?",
    choices: ["Pierre Omidyar", "Bill Gates", "Elon Musk", "Sundar Pichai "],
    correctAnswer: 0
  },
  {
    question: "14. How many languages are written from right to left?",
    choices: ["5", "14", "10", "12"],
    correctAnswer: 3
  },
  {
    question: "15. What is the name of the biggest technology company in South Korea?",
    choices: ["Samsung", "Motorola", "Apple", "Google"],
    correctAnswer: 0
  },
  {
    question: "16. What is the name of the World's largest ocean?",
    choices: ["Philippine Sea", "Pacific Ocean", "Coral Sea", " American Mediterranean Sea "],
    correctAnswer: 1
  },
  {
    question: "17. Demolition of the Berlin wall separating East and West Germany began in what year?",
    choices: ["1986", "1987", "1988", "1989"],
    correctAnswer: 3
  },
  {
    question: "18. Which monarch officially made Valentine's Day a holiday in 1537?",
    choices: ["Henry V", "Henry VI", "Henry VII", "Henry VIII"],
    correctAnswer: 3
  },
  {
    question: "19. Which animal is known as the 'King of the Jungle'?",
    choices: ["Lion", "Tiger", "Elephant", "Giraffe"],
    correctAnswer: 0
    },
    {
      question: "20. Who is the author of the famous play 'Romeo and Juliet'?",
      choices: ["William Shakespeare", "Arthur Miller", "Tennessee Williams", "Oscar Wilde"],
      correctAnswer: 0
      },
    {
    question: "21. Who painted the famous artwork 'Mona Lisa'?",
    choices: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2
    },
    {
    question: "22. Which country is home to the Great Barrier Reef?",
    choices: ["Brazil", "Australia", "Mexico", "Canada"],
    correctAnswer: 1
    },
    {
    question: "23. What is the chemical symbol for the element gold?",
    choices: ["Ag", "Au", "Hg", "Pb"],
    correctAnswer: 1
    },
    {
    question: "24. Who wrote the novel 'Pride and Prejudice'?",
    choices: ["Emily Bronte", "Jane Austen", "Charlotte Bronte", "Virginia Woolf"],
    correctAnswer: 1
    },
    {
    question: "25. In which city is the famous landmark Taj Mahal located?",
    choices: ["New Delhi", "Mumbai", "Kolkata", "Agra"],
    correctAnswer: 3
    },
    {
    question: "26. What is the capital of Canada?",
    choices: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    correctAnswer: 3
    },
    {
    question: "27. Which planet is known as the 'Red Planet'?",
    choices: ["Mercury", "Venus", "Mars", "Jupiter"],
    correctAnswer: 2
    },
    {
    question: "28. Who is the creator of the 'Harry Potter' book series?",
    choices: ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Stephenie Meyer"],
    correctAnswer: 1
    },
  {
  question: "29. Who is the Greek god of the sea?",
  choices: ["Zeus", "Poseidon", "Hades", "Apollo"],
  correctAnswer: 1
  },
  {
  question: "30. Which famous scientist developed the theory of relativity?",
  choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
  correctAnswer: 1
  }
  
  // Add more trivia questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");

function showQuestion() {
  const trivia = triviaData[currentQuestion];
  questionElement.textContent = trivia.question;
  
  choicesElement.innerHTML = "";
  trivia.choices.forEach(function(choice, index) {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", function() {
      checkAnswer(index);
    });
    choicesElement.appendChild(li);
  });
}

function checkAnswer(answerIndex) {
  const trivia = triviaData[currentQuestion];
  if (answerIndex === trivia.correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < triviaData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "You have completed the trivia game!";
  choicesElement.innerHTML = `Your score: ${score} out of ${triviaData.length}`;
  nextButton.style.display = "none";
  resetButton.style.display = "inline-block";
}

function resetGame() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
  resetButton.style.display = "none";
  nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", function() {
  showQuestion();
});

resetButton.addEventListener("click", function() {
  resetGame();
});

showQuestion();
