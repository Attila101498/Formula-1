var myQuestions = [
    {
        question: "1. Kik alkotják a Ferrari pilótáit a 2019-es idényben?",
        answers: {
            a: 'Sebastian Vettel & Daniel Ricciardo',
            b: 'Sebastian Vettel & Charles Leclerc',
            c: 'Kimi Räikkönen & Alexander Albon',
            d: 'Kimi Räikkönen & Charles Leclerc'
        },
        correctAnswer: 'b'
    },
    {
        question: "2. Melyik Kevin Magnussen rajtszáma?",
        answers: {
            a: '7',
            b: '12',
            c: '15',
            d: '20'
        },
        correctAnswer: 'd'
    },
    {
        question: "3. Hogy hívják a McLaren újoncát?",
        answers: {
            a: 'Lance Stroll',
            b: 'Pierre Gasly',
            c: 'Lando Norris',
            d: 'George Russell'
        },
        correctAnswer: 'c'
    },
    {
        question: "4. Ki Lewis Hamilton csapattársa?",
        answers: {
            a: 'Valtteri Bottas',
            b: 'Sebastian Vettel',
            c: 'Max Verstappen',
            d: 'Robert Kubica'
        },
        correctAnswer: 'a'
    },
    {
        question: "5. Igaz-e az alábbi állítás? Sergio Péreznek van világbajnoki címe.",
        answers: {
            a: 'Igaz',
            b: 'Hamis'
        },
        correctAnswer: 'b'
    },
    {
        question: "6. Kik alkotják a Red Bull Racing pilótáit a 2019-es idényben?",
        answers: {
            a: 'Pierre Gasly & Max Verstappen',
            b: 'Sebastian Vettel & Pierre Gasly',
            c: 'Max Verstappen & Nico Hülkenberg',
            d: 'Antonio Giovinazzi & Max Verstappen'
        },
        correctAnswer: 'a'
    },
    {
        question: "7. Melyik Daniel Ricciardo rajtszáma?",
        answers: {
            a: '1',
            b: '3',
            c: '16',
            d: '77'
        },
        correctAnswer: 'b'
    },
    {
        question: "8. Hány világbajnoki címmel rendelkezik Kimi Räikkönen?",
        answers: {
            a: '1',
            b: '2',
            c: '3',
            d: '4'
        },
        correctAnswer: 'a'
    },
    {
        question: "9. Ki Danyiil Kvjat csapattársa?",
        answers: {
            a: 'Antonio Giovinazzi',
            b: 'Lando Norris',
            c: 'Alexander Albon',
            d: 'Carlos Sainz Jr.'
        },
        correctAnswer: 'c'
    },
    {
        question: "10. Milyen nemzetiségű Robert Kubica?",
        answers: {
            a: 'brit',
            b: 'finn',
            c: 'ausztrál',
            d: 'lengyel'
        },
        correctAnswer: 'd'
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