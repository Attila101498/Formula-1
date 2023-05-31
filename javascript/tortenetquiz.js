var myQuestions = [
    {
        question: "1. Ki nyerte az első, 1906-ban megrendezett nagydíjat?",
        answers: {
            a: 'Szisz Ferenc',
            b: 'Nino Farina',
            c: 'Juan Manuel Fangio',
            d: 'Stirling Moss'
        },
        correctAnswer: 'a'
    },
    {
        question: "2. Mikor alapult meg az FIA (Nemzetközi Automobil Szövetség)?",
        answers: {
            a: '1906',
            b: '1936',
            c: '1946',
            d: '1950'
        },
        correctAnswer: 'c'
    },
    {
        question: "3. Ki nyerte a Formula-1 első, 1950-es világbajnoki címet?",
        answers: {
            a: 'Jack Brabham',
            b: 'Mike Hawthorn',
            c: 'Alberto Ascari',
            d: 'Nino Farina'
        },
        correctAnswer: 'd'
    },
    {
        question: "4. Igaz-e az állítás? Az első reklámok az 1960-as évek végén jelentek meg.",
        answers: {
            a: 'Igaz',
            b: 'Hamis'
        },
        correctAnswer: 'a'
    },
    {
        question: "5. Ki a Formula-1 egyetlen posztumusz világbajnoka?",
        answers: {
            a: 'Jackie Stewart',
            b: 'Jim Clark',
            c: 'Jochen Rindt',
            d: 'James Hunt'
        },
        correctAnswer: 'c'
    },
    {
        question: "6. Melyik csapat vezette be a turbómotorokat?",
        answers: {
            a: 'Renault',
            b: 'BMW',
            c: 'Ferrari',
            d: 'Mercedes'
        },
        correctAnswer: 'a'
    },
    {
        question: "7. Melyik évben tiltották be a turbómotorok használatát?",
        answers: {
            a: '1987',
            b: '1988',
            c: '1989',
            d: '1990'
        },
        correctAnswer: 'c'
    },
    {
        question: "8. Ki nyerte az 1990-es évek első világbajnokságát?",
        answers: {
            a: 'Michael Schumacher',
            b: 'Ayrton Senna',
            c: 'Damon Hill',
            d: 'Jacques Villeneuve'
        },
        correctAnswer: 'b'
    },
    {
        question: "9. Kinek sikerült megtörtnie a Ferrari 5 egymást követő világbajnoki címeit?",
        answers: {
            a: 'Fernando Alonso',
            b: 'Kimi Räikkönen',
            c: 'Sebastian Vettel',
            d: 'Lewis Hamilton'
        },
        correctAnswer: 'a'
    },
    {
        question: "10. Melyik évben hozták vissza a 107%-os szabályt?",
        answers: {
            a: '2009',
            b: '2010',
            c: '2011',
            d: '2012'
        },
        correctAnswer: 'c'
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