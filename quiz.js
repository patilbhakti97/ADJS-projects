const quizData=[
    {
        question:"Q1.What does the abbreviation HTML stand for?",
        a: "HyperText Markup Language",
        b: "HighText Markup Language",
        c: "HyperText Markdown Language",
        d: "None of Above",
        answer: "answer1"
    },
    {
        question:"Q2.What is the smallest header in HTML by default?",
        a: "H1",
        b: "H2",
        c: "H6",
        d: "H4",
        answer: "answer3"
    },
    {
        question:"Q3.How can we change the text color of an element?",
        a: "Background-color",
        b: "Color",
        c: "Both a and b",
        d: "None of the above",
        answer: "answer2"
    },
    {
        question:"Q4.How can we select an element with a specific ID in CSS?",
        a: "^",
        b: ".",
        c: "#",
        d: "None of the above",
        answer: "answer3"
    },
    {
        question:"Q5.Javascript is an _______ language.",
        a: "Object-oriented",
        b: "Object-based",
        c: "Procedural",
        d: "None of the above",
        answer: "answer1"
    }
]
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');
const score=document.querySelector('#score');

let queCount=0;
let scored=0;

const uploadQuestion=()=>{
    const queList=quizData[queCount];
    question.innerText=queList.question;
    option1.innerText=queList.a;
    option2.innerText=queList.b;
    option3.innerText=queList.c;
    option4.innerText=queList.d;
}
uploadQuestion();

const getselAnswer=()=>{
    let ans;
    answers.forEach((currentAns)=>{
        if(currentAns.checked){
            ans=currentAns.id;
        }
    });
    return ans;
};
const deselectAll=()=>{
    answers.forEach((currentAns)=>currentAns.checked=false);
}
submit.addEventListener('click',()=>{
    const selAnswer=getselAnswer();
    console.log(selAnswer);
    if(selAnswer===quizData[queCount].answer){
        scored++;
    };
    queCount++;

    deselectAll();
    if(queCount<quizData.length){
        uploadQuestion();
    }
    else{
        score.innerHTML=`<h3>Your score ${scored}/${quizData.length}</h3>
        <button class="btn" onclick="location.reload()">Start again</button>`;
        score.classList.remove('scorediv');
    }
});