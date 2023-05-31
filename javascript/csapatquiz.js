var myQuestions = [
    {
        question: "1. Melyik a Formula-1 négy legsikeresebb csapata?",
        answers: {
            a: 'Ferrari, Williams, Mercedes, Renault',
            b: 'Mercedes, Renault, Lotus, Williams',
            c: 'Mercedes, Renault, Brabham, Red Bull',
            d: 'Ferrari, Williams, McLaren, Lotus'
        },
        correctAnswer: 'd'
    },
    {
        question: "2. Mikor szerezte meg José Froilán González a Ferrari első győzelmét?",
        answers: {
            a: '1950',
            b: '1951',
            c: '1957',
            d: '1961'
        },
        correctAnswer: 'b'
    },
    {
        question: "3. Mikor vásárolta meg a Ferrari Michael Schumachert?",
        answers: {
            a: '1996',
            b: '1997',
            c: '1998',
            d: '1999'
        },
        correctAnswer: 'a'
    },
    {
        question: "4. Melyik évben szerezte meg a Williams csapat az első győzelmét?",
        answers: {
            a: '1979',
            b: '1980',
            c: '1981',
            d: '1982'
        },
        correctAnswer: 'a'
    },
    {
        question: "5. Meddig versenyzett Toyota motorokkal a Williams csapat?",
        answers: {
            a: '1989-1999',
            b: '2000-2006',
            c: '2007-2009',
            d: '2010-2011'
        },
        correctAnswer: 'c'
    },
    {
        question: "6. Melyik évben alapította Bruce McLaren a 'Bruce McLaren Motor Racing'-et?",
        answers: {
            a: '1960',
            b: '1961',
            c: '1962',
            d: '1963'
        },
        correctAnswer: 'd'
    },
    {
        question: "7. Mikor lett a West cigarettamárka a McLaren csapat főszponzora?",
        answers: {
            a: '1996',
            b: '1997',
            c: '1998',
            d: '1999'
        },
        correctAnswer: 'b'
    },
    {
        question: "8. Melyik modellel debütált a Lotus a Formula-1-be?",
        answers: {
            a: 'Lotus 6',
            b: 'Lotus 12',
            c: 'Lotus 16',
            d: 'Lotus 18'
        },
        correctAnswer: 'b'
    },
    {
        question: "9. Hogy hívják a Lotus legendás alapítóját?",
        answers: {
            a: 'Colin Chapman',
            b: 'Stuart Lewis-Evans',
            c: 'Stirling Moss',
            d: 'Innes Ireland'
        },
        correctAnswer: 'a'
    },
    {
        question: "10. Igaz-e az állítás? A Lotus fejlesztéseivel többször is korszerűsítette a Formula-1-et.",
        answers: {
            a: 'Igaz',
            b: 'Hamis'
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