const startBtn = document.querySelector('.start-btn');
const popInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');

startBtn.onclick = () =>{
    popupInfo.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick = () =>{
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = () =>{
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}
// const main = document.querySelector('.main')
// const quizSection = document.querySelector('.quiz-section')
// const quizBox = document.querySelector('.quiz-box');
// // const quizCont = document.querySelector('.quiz');

// main.classList.add('active');
// quizSection.classList.add('active');
// quizBox.classList.add('active');
// // quizCont.classList.add('active');

// showQuestions(0);
// questionCounter(1);

// let questionCount = 0;

// const nextBtn = document.querySelector('.next-btn');

// nextBtn.onclick = () => {
//     if(questionCount < questions.length-1){
//         questionCount++;
//         showQuestions(questionCount);    

//         questionNumb++;
//         questionCounter(questionNumb);
//     }else{
//         console.log('Question Completed')
//     }
// }

// const optionList = document.querySelector('.option-list')

// function showQuestions(index){
//     const questionText = document.querySelector('.question-text');
//     questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

//     let optionTag = `<div class="option">
//     <span>${questions[index].options[0]} </span></div>
//     <div class="option"><span>${questions[index].options[1]} </span></div>
//     <div class="option"><span>${questions[index].options[2]} </span></div>
//     <div class="option"><span>${questions[index].options[3]} </span></div>`;

//     optionList.innerHTML = optionTag;
// }
// function questionCounter(index){
//     const questionTotal = document.querySelector
// }