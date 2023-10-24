const quizData = [
    {
        question: 'What programming language is the must used in 2020',
        a: 'c',
        b: 'c++',
        c: 'python',
        d: 'java',
        correct: 'b',
    }, {
        question: 'who is the president of Nigeria',
        a: 'Donald',
        b: 'Beloved',
        c: 'John',
        d: 'Jagaban',
        correct: 'd',
    }, {
        question: 'What is the full meaning of HTML',
        a: 'hypertext markup language',
        b: 'HyperText Markup Language',
        c: 'Hypertext Markup Language',
        d: 'Help Text My Love',
        correct: 'c',
    }, {
        question: 'Who is the president of the United State of America',
        a: 'Joe Biden',
        b: 'Donald Trump',
        c: 'Mark Zuckerberg',
        d: 'Elon Musk',
        correct: 'a',
    }
]
const quizCon = document.querySelector(".quiz-contaner");
const answerEls = document.querySelectorAll(".checked");

const questionEl = document.getElementById("question");
const text_a = document.getElementById("text_a");
const text_b = document.getElementById("text_b");
const text_c = document.getElementById("text_c");
const text_d = document.getElementById("text_d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


callQuiz();






function callQuiz() {

    

   const currentQuizData = quizData[currentQuiz];

   questionEl.innerHTML = currentQuizData.question;
   text_a.innerHTML = currentQuizData.a;
   text_b.innerHTML = currentQuizData.b;
   text_c.innerHTML = currentQuizData.c;
   text_d.innerHTML = currentQuizData.d;

   deSelect();
   
   
}

function checkSelected() {
    let answer = undefined;
    

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;

}

function deSelect() {

    answerEls.forEach((answer => {
        answer.checked = false;
    }))

}

submitBtn.addEventListener("click", () => {

    const answer = checkSelected();
    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
        
            score++;      
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
        
            callQuiz();

        } else {

        quizCon.innerHTML = `<h2> your score is ${score}/${quizData.length} ` ;
            
        }
        console.log(score);

    }

})


/*<button class="reload_btn" onclick= "location.reload()">Reload<button>*/