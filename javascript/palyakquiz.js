var myQuestions = [
    {
        question: "1. Melyik városban rendezik az Ausztrál nagydíjat?",
        answers: {
            a: 'Sydney',
            b: 'Melbourne',
            c: 'Geelong',
            d: 'Hobart'
        },
        correctAnswer: 'b'
    },
    {
        question: "2. Hány kanyar található a bahraini pályán?",
        answers: {
            a: '13',
            b: '14',
            c: '15',
            d: '16'
        },
        correctAnswer: 'c'
    },
    {
        question: "3. Hány kilométer hosszú a kínai nagydíj pályája?",
        answers: {
            a: '4,3 km.',
            b: '5,4 km.',
            c: '5,7 km.',
            d: '6,5 km.'
        },
        correctAnswer: 'b'
    },
    {
        question: "4. Igaz-e az állítás? A bakui pályát 2017-ben építették.",
        answers: {
            a: 'Igaz',
            b: 'Hamis'
        },
        correctAnswer: 'b'
    },
    {
        question: "5. Ki tartja a pályacsúcsot a Spanyol pályán?",
        answers: {
            a: 'Mark Webber',
            b: 'Lewis Hamilton',
            c: 'Sebastian Vettel',
            d: 'Fernando Alonso'
        },
        correctAnswer: 'a'
    },
    {
        question: "6. Ki szerezte a legtöbb győzelmet a monacoi nagydíhon?",
        answers: {
            a: 'Kimi Räikkönen',
            b: 'Lewis Hamilton',
            c: 'Ayrton Senna',
            d: 'Michael Schumacher'
        },
        correctAnswer: 'c'
    },
    {
        question: "7. Hány győzelemmel tartja Michael Schumacher a Francia pályán a győzelmi rekordot?",
        answers: {
            a: '7',
            b: '8',
            c: '9',
            d: '10'
        },
        correctAnswer: 'b'
    },
    {
        question: "8. Mikor épült a Hungaroring?",
        answers: {
            a: '1983',
            b: '1984',
            c: '1985',
            d: '1986'
        },
        correctAnswer: 'd'
    },
    {
        question: "9. Igaz-e az állítás? A mexikói pályacsúcsot Daniel Ricciardo tartja.",
        answers: {
            a: 'Igaz',
            b: 'Hamis'
        },
        correctAnswer: 'a'
    },
    {
        question: "10. Ki tudott legtöbbször nyerni a brazíliai nagydíjon?",
        answers: {
            a: 'Alain Prost',
            b: 'Rubens Barrichello',
            c: 'Kimi Räikkönen',
            d: 'Sebastian Vettel'
        },
        correctAnswer: 'a'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        let output = [];
        let answers;

        for (let i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + '. '
                    + questions[i].answers[letter]
                    + '</label><br>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        let answerContainers = quizContainer.querySelectorAll('.answers');
        let userAnswer = '';
        let numCorrect = 0;

        for (let i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'green';
            } else {
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = 'Eredményed: ' + '<b>' + numCorrect + '</b>' + ' / ' + '<b>' + questions.length + '</b>';
        alert('Eredményed: ' + numCorrect + ' / ' + questions.length);
    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}