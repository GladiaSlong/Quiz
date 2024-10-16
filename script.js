const questions = [
    { 
        question:" What is the capital city of New Zealand?",
        answers:[
           { text: "Christchurch", correct: false},
           { text: "Nelson", correct: false},
           { text: "Queenstown", correct: false},
           { text: "Wellington", correct: true},
        ]    
    },
    { 
        question:" What is the capital city of Switzerland?",
        answers:[
           { text: "Lugano", correct: false},
           { text: "Bern", correct: true},
           { text: "Lucrene", correct: false}, 
           { text: "Geneva", correct: false},
        ]    
    },
    { 
        question:" What is the capital city of Italy?",
        answers:[
           { text: "Rome", correct: true},
           { text: "Naples", correct: false},
           { text: "Milan", correct: false}, 
           { text: "Venice", correct: false},
        ]    
    },
    { 
        question:" What is the capital city of United Kingdom?",
        answers:[
           { text: "Manchester", correct: false},
           { text: "Liverpool", correct: false},
           { text: "London", correct: true}, 
           { text: "Cambridge", correct: false},
        ]    
    },
    { 
        question:" What is the capital city of Ireland?",
        answers:[
           { text: "Galway", correct: false},
           { text: "Waterford", correct: false},
           { text: "Carlow", correct: false}, 
           { text: "Dublin", correct: true},
        ]    
    },
    { 
        question:" What is the capital city of Indonesia?",
        answers:[
           { text: "Sofifi", correct: false},
           { text: "Jakarta", correct: true},
           { text: "Amuntai", correct: false}, 
           { text: "Maros", correct: false},
        ]    
    },
    { 
        question:" What is the capital city of Alaska?",
        answers:[
           { text: "Fairbanks", correct: false},
           { text: "Anchorage", correct: false},
           { text: "Juneau", correct: true}, 
           { text: "Kenei", correct: false},
        ]    
    },
    { 
        question:" What is the capital city of Turkey?",
        answers:[
           { text: "Gaziantep", correct: false},
           { text: "Antalya", correct: false},
           { text: "Bursa", correct: false},
           { text: "Ankara", correct: true},
        ]
    },
    { 
        question:" What is the capital city of Finland?",
        answers:[
           { text: "Rovaniemi", correct: false},
           { text: "Espoo", correct: false},
           { text: "Helsinki", correct: true},
           { text: "Vantaa", correct: false},
        ]    
    },
    { 
        question:" What is the capital city of Germany?",
        answers:[
           { text: "Frankfurt", correct: false},
           { text: "Berlin", correct: true},
           { text: "Hamburg", correct: false},
           { text: "Hanover", correct: false},
        ]    
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true" ){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();
