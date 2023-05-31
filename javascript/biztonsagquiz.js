var myQuestions = [
    {
        question: "1. Mióta kötelező a biztonsági öv használata?",
        answers: {
            a: '1965',
            b: '1966',
            c: '1967',
            d: '1968'
        },
        correctAnswer: 'c'
    },
    {
        question: "2. Ki vesztette életét az 1967-es monacoi nagydíjon?",
        answers: {
            a: 'John Taylor',
            b: 'Jim Clark',
            c: 'Jochen Rindt',
            d: 'Lorenzo Bandini'
        },
        correctAnswer: 'd'
    },
    {
        question: "3. Kinek a halála után kezdték el a pályák biztonságosabbá tételét?",
        answers: {
            a: 'Jim Clark',
            b: 'Jochen Rindt',
            c: 'Carel Godin de Beaufort',
            d: 'John Taylor'
        },
        correctAnswer: 'a'
    },
    {
        question: "4. Ki a Formula-1 egyetlen posztumusz világbajnoka?",
        answers: {
            a: 'Jackie Stewart',
            b: 'Jim Clark',
            c: 'Jochen Rindt',
            d: 'James Hunt'
        },
        correctAnswer: 'c'
    },
    {
        question: "5. Ki volt az a pilóta, aki félreállt és megpróbálta visszaborítani Roger Williamson autóját?",
        answers: {
            a: 'Ronnie Peterson',
            b: 'David Purley',
            c: 'Jackie Oliver',
            d: 'Jacky Ickx'
        },
        correctAnswer: 'b'
    },
    {
        question: "6. Kinek az 'elrontott' előzési kísérletéből indult az 1973-as silverstone-i tömegbaleset?",
        answers: {
            a: 'Denny Hulme',
            b: 'Peter Revson',
            c: 'Andrea de Adamich',
            d: 'Jody Scheckter'
        },
        correctAnswer: 'd'
    },
    {
        question: "7. Mióta kötelező a tűzálló overál használata?",
        answers: {
            a: '1973',
            b: '1974',
            c: '1975',
            d: '1976'
        },
        correctAnswer: 'c'
    },
    {
        question: "8. Mióta van mentőhelikopter minden versenypályán a tesztek és a verseny ideje alatt?",
        answers: {
            a: '1983',
            b: '1984',
            c: '1985',
            d: '1986'
        },
        correctAnswer: 'd'
    },
    {
        question: "9. Igaz-e az állítás? 2009-ben tiltották be a futam közbeni tankolást.",
        answers: {
            a: 'Iagz',
            b: 'Hamis'
        },
        correctAnswer: 'a'
    },
    {
        question: "10. Kinek az életét mentette meg a Halo a 2018-as Belga nagydíjon?",
        answers: {
            a: 'Fernando Alonso',
            b: 'Charles Leclerc',
            c: 'Kimi Räikkönen',
            d: 'Sebastian Vettel'
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