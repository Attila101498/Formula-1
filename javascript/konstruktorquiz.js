var myQuestions = [
    {
        question: "1. Mióta van külön bajnokság a konstruktőrök részére a Formula-1-ben?",
        answers: {
            a: '1956',
            b: '1957',
            c: '1958',
            d: '1959'
        },
        correctAnswer: 'c'
    },
    {
        question: "2. Melyik csapat nyerte meg az első konstruktőri világbajnokságot?",
        answers: {
            a: 'Vanwall',
            b: 'Cooper',
            c: 'Ferrari',
            d: 'BRM'
        },
        correctAnswer: 'a'
    },
    {
        question: "3. Melyik évben alkalmazták először a ma is használatban lévő pontrendszert?",
        answers: {
            a: '1977',
            b: '1978',
            c: '1979',
            d: '1980'
        },
        correctAnswer: 'c'
    },
    {
        question: "4. Melyik a sportág legsikeresebb csapata, amelyik 16 konstruktőri címmel rendelkezik?",
        answers: {
            a: 'Mercedes',
            b: 'Lotus',
            c: 'McLaren',
            d: 'Ferrari'
        },
        correctAnswer: 'd'
    },
    {
        question: "5. Hány év kihagyás után tért vissza a gyári Mercedes a Formula-1-be?",
        answers: {
            a: '50',
            b: '55',
            c: '60',
            d: '65'
        },
        correctAnswer: 'b'
    },
    {
        question: "6. Melyik csapat fordítja a legtöbb energiát az utánpótlás-nevelésre?",
        answers: {
            a: 'McLaren',
            b: 'Haas',
            c: 'Renault',
            d: 'Red Bull'
        },
        correctAnswer: 'd'
    },
    {
        question: "7. Melyik csapat a negyedik legrégebbi résztvevője a Formula-1-nek?",
        answers: {
            a: 'Haas',
            b: 'Ferrari',
            c: 'Sauber',
            d: 'Mercedes'
        },
        correctAnswer: 'c'
    },
    {
        question: "8. Melyik csapat nyerte az 1959-es idényt?",
        answers: {
            a: 'Cooper',
            b: 'Vanwall',
            c: 'Lotus',
            d: 'Brabham'
        },
        correctAnswer: 'a'
    },
    {
        question: "9. Igaz-e az állítás? 1961-ben nyert először a Ferrari bajnoki címet.",
        answers: {
            a: 'Igaz',
            b: 'Hamis'
        },
        correctAnswer: 'a'
    },
    {
        question: "10. Hány évig tartott a Red Bull uralkodása Sebastian Vettellel?",
        answers: {
            a: '3',
            b: '4',
            c: '5',
            d: '6'
        },
        correctAnswer: 'b'
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