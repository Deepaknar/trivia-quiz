
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
const quizContainer = document.getElementById('quiz-container');
const questionTitle = document.getElementById('question-title');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

function loadQuestion(index) {
    const question = quizQuestions[index];
    questionTitle.textContent = question.question;
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, i) => {
        const answerItem = document.createElement('a');
        answerItem.classList.add('list-group-item', 'list-group-item-action');
        answerItem.textContent = answer;
        answerItem.onclick = () => {
            const items = answersContainer.getElementsByClassName('list-group-item');
            for (let item of items) {
                item.classList.remove('active');
            }
            answerItem.classList.add('active');
        };
        answersContainer.appendChild(answerItem);
    });

    nextBtn.classList.toggle('d-none', index === quizQuestions.length - 1);
    submitBtn.classList.toggle('d-none', index !== quizQuestions.length - 1);
}

nextBtn.onclick = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
};

submitBtn.onclick = () => {
    alert('Quiz submitted!');
   
};


loadQuestion(currentQuestionIndex);

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedback-form');
    const toast = $('#feedback-toast');

    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevent form submission for demonstration
            form.classList.add('was-validated');
            toast.toast('show');
        }
    });

    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function () {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedback-form');
    const toast = $('#feedback-toast');

    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault(); // Prevent form submission for demonstration
            form.classList.add('was-validated');
            toast.toast('show');
        }
    });

    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function () {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        });
    });
});
