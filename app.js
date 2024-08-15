const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "J.K. Rowling",
        c: "Leo Tolstoy",
        d: "William Shakespeare",
        correct: "d"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "South Korea",
        c: "Japan",
        d: "Thailand",
        correct: "c"
    },
    {
        question: "What is the chemical symbol for gold?",
        a: "Ag",
        b: "Au",
        c: "Pt",
        d: "Hg",
        correct: "b"
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        a: "Oxygen",
        b: "Hydrogen",
        c: "Nitrogen",
        d: "Carbon Dioxide",
        correct: "c"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Silver",
        correct: "c"
    },
    {
        question: "Which country is the largest by land area?",
        a: "Canada",
        b: "China",
        c: "Russia",
        d: "USA",
        correct: "c"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        a: "Oxygen",
        b: "Osmium",
        c: "Oganesson",
        d: "Ozone",
        correct: "a"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const nextButton = document.getElementById('next-question');
const restartButton = document.getElementById('restart-quiz');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <div><strong>Question ${currentQuestion + 1}:</strong> ${currentQuizData.question}</div>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label><br>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label><br>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label><br>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
}

nextButton.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (answer && answer.value === quizData[currentQuestion].correct) {
        score++;
        answer.parentElement.style.color = 'green';
    } else {
        answer.parentElement.style.color = 'red';
    }

    currentQuestion++;

    setTimeout(() => {
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            resultContainer.innerHTML = `You finished the quiz! Your score: ${score}/${quizData.length}`;
            nextButton.style.display = 'none';
            restartButton.style.display = 'inline-block';
        }
    }, 1000);
});

restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    nextButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
    resultContainer.innerHTML = '';
    loadQuiz();
});

loadQuiz();
