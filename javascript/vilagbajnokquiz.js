var myQuestions = [
    {
        question: "1. Ki nyerte a Formula-1 első, 1950-es világbajnoki címet?",
        answers: {
            a: 'Jack Brabham',
            b: 'Nino Farina',
            c: 'Alberto Ascari',
            d: 'Mike Hawthorn'
        },
        correctAnswer: 'b'
    },
    {
        question: "2. Ki nyerte az 1952-es valamint az 1953-as világbajnokságot?",
        answers: {
            a: 'Phil Hill',
            b: 'Nino Farina',
            c: 'Juan Manuel Fangio',
            d: 'Alberto Acari'
        },
        correctAnswer: 'd'
    },
    {
        question: "3. Melyik évben lett Jochen Rindt posztumusz világbajnok?",
        answers: {
            a: '1969',
            b: '1970',
            c: '1971',
            d: '1972'
        },
        correctAnswer: 'b'
    },
    {
        question: "4. Igaz-e az állítás? Jim Clark kétszeres világbajnok.",
        answers: {
            a: 'Igaz',
            b: 'Hamis'
        },
        correctAnswer: 'a'
    },
    {
        question: "5. Igaz-e az állítás? James Hunt 1975-ben lett világbajnok.",
        answers: {
            a: 'Igaz',
            b: 'Hamis'
        },
        correctAnswer: 'b'
    },
    {
        question: "6. Hányszoros világbajnok Juan Manuel Fangio?",
        answers: {
            a: '1',
            b: '3',
            c: '5',
            d: '6'
        },
        correctAnswer: 'c'
    },
    {
        question: "7. Melyik évben lett Jody Scheckter világbajnok?",
        answers: {
            a: '1977',
            b: '1978',
            c: '1979',
            d: '1980'
        },
        correctAnswer: 'c'
    },
    {
        question: "8. Ki szerzett 4 világbajnoki címet Sebastian Vettel mellett?",
        answers: {
            a: 'Nelson Piquet',
            b: 'Ayrton Senna',
            c: 'Niki Lauda',
            d: 'Alain Prost'
        },
        correctAnswer: 'd'
    },
    {
        question: "9. Kinek van 2019-ben legtöbb világbajnoki címe?",
        answers: {
            a: 'Lewis Hamilton',
            b: 'Juan Manuel Fangio',
            c: 'Kimi Räikkönen',
            d: 'Michael Schumacher'
        },
        correctAnswer: 'd'
    },
    {
        question: "10. Ki nyerte a 2005-ös és 2006-os világbajnoki címet?",
        answers: {
            a: 'Mika Häkkinen',
            b: 'Kimi Räikkönen',
            c: 'Fernando Alonso',
            d: 'Jacques Villeneuve'
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