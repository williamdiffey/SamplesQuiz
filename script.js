// 'use strict';

const questionStore = [
{
    questionId: 1,
    questionText: 'Ni-Ten-Ichi-Ryu by Photek used which of the following in its introduction?',
    ans1:'Carnival De LEspirit by Gary Bartz',
    ans2:'Driva Man by Max Roach',
    ans3:'Rock Dirge by Sly Stone',
    ans4:'Freedom Song by Matthew Halsall',
    correctAns: 'Driva Man by Max Roach',
    img: 'images/1.jpg'
},

{
    questionId: 2,
    questionText: 'Origin Unknown&rsquo;s Truly One uses which break?',
    ans1: 'Hot Pants by Bobby Byrd',
    ans2: 'Amen Brother by The Winstons',
    ans3: 'Tighten Up by James Brown',
    ans4: 'Both Eyes Open by Billy Clarke',
    correctAns: 'Hot Pants by Bobby Byrd',
    img: 'images/2.jpg'
},

{
    questionId: 3,
    questionText: 'Alien Girl by Ed Rush, Optical and Fierce samples which well known sample CD?',
    ans1: 'Future Music CD1',
    ans2: 'Jungle Warfare Vol. 1',
    ans3: 'Cuckooland Vol. 2',
    ans4: 'Junk Yard Percussion',
    correctAns: 'Cuckooland Vol. 2',
    img: 'images/3.jpg'},

{
    questionId: 4,
    questionText: 'Wax Doctor used which break in Spectrum?',
    ans1: 'Apache by Incredible Bongo Band',
    ans2: 'Sesame Street by Blowfly',
    ans3: 'Funky Mule by Ike Turner',
    ans4: 'Butterfingers by Bernard Purdie',
    correctAns: 'Apache by Incredible Bongo Band',
    img: 'images/4.jpg'},

{
    questionId: 5,
    questionText: 'What track was used as a second generation sample by Rufuge Cru on 1996&rsquo;s Dark Metal?',
    ans1: 'Make Way for a Panther by Paris',
    ans2: 'Fool&rsquo;s Gold by the Stone Roses',
    ans3: 'The Flow by Model 500',
    ans4: 'Sniper (aka Tramen) by DJ Trace',
    correctAns: 'Make Way for a Panther by Paris',
    img: 'images/5.jpg'},

{   
    questionId: 6,
    questionText: 'What break did Paradox rework for Sample Me 7?',
    ans1: 'Butterfingers by Bernard Purdie',
    ans2: 'Both Eyes Open by Billy Clarke',
    ans3: 'Assembly Line by the Commodores',
    ans4: 'Amen Brother by The Winstons',
    correctAns: 'Butterfingers by Bernard Purdie',
    img: 'images/6.jpg'},

{
    questionId: 7,
    questionText: 'What movie did Nasty Habits sample on Shadow Boxing?',
    ans1: 'Shaolin & Wu Tang (1983)',
    ans2: 'Mystery of Chessboxing (1987)',
    ans3: 'Dance of Drunken Mantis (1979)',
    ans4: 'Shaolin vs Lama (1983)',
    correctAns: 'Shaolin vs Lama (1983)',
    img: 'images/7.jpg'},

{
    questionId: 8,
    questionText: 'The vocal sample in Krust&rsquo;s Blaze Dis One is from which artist?',
    ans1: 'Gang Starr',
    ans2: 'LL Cool J',
    ans3: 'A Tribe Called Quest',
    ans4: 'De La Soul',
    correctAns: 'LL Cool J',
    img: 'images/8.jpg'},

{
    questionId: 9,
    questionText: 'The Prodigy sampled which 2 Bad Mice track for Outta Space?',
    ans1: 'Bombscare',
    ans2: 'Hold it Down',
    ans3: 'Ware Mouse',
    ans4: 'After Dark',
    correctAns: 'Bombscare',
    img: 'images/9.jpg'},

{
    questionId: 10,
    questionText: 'Roni Size and DJ Die sampled which of the following on Music Box?',
    ans1: 'Piece of Mind by Idris Muhammad',
    ans2: 'Daylight by Ramp',
    ans3: 'Put Your Love by the Fatback Band',
    ans4: 'U.F.O. by Geoff Love',
    correctAns: 'Piece of Mind by Idris Muhammad',
    img: 'images/10.jpg'},
];


let progress = 0;
let currentQuestion = 1;
let score = 0;

function renderStart() {
    $('.feedback').hide();
    $('.finalFeedback').hide();
    $('.quizStart').on('click', '.startButton', function (event) {
    $('.quizStart').remove();
    renderPage();
    });   
}

function renderPage() {
    $('.navbar').html(generateNav());
    $('footer').hide();
    if (progress < questionStore.length) {
        $('.qnaForm').show();
        $('.qnaForm').html(generateQnA());
        generateImg();
        userResponse();
    } else { 
        console.log(`quiz ended`);     
        endOfQuiz();

    }

    // $('.options').css({"background-image": "url()"
    //     console.log(`${questionStore[progress].img}`);
    // document.getElementsByClassName("qnaForm").innerHTML = "test";
}

function generateNav() {
    return `
            <h4>Question : <span class='progress'>${currentQuestion}</span>/10</h4>
            <h4>Score : <span class='score'>${score}</span>/10</h4>
           `
}
function generateQnA() { 
    return `<form name="quizform" onsubmit="return submitAnswers()">
            <section class='question'>
                <p>${questionStore[progress].questionText}</p>
            </section>
            <section class='options' >
                    <input type="button" role='button' class='optionA' value="${questionStore[progress].ans1}">
                    <input type="button" role='button' class='optionB' value="${questionStore[progress].ans2}">
                    <input type="button" role='button' class='optionC' value="${questionStore[progress].ans3}">
                    <input type="button" role='button' class='optionD' value="${questionStore[progress].ans4}">
            </form>`
}


function generateImg() {
   $('.options').css("background-image", "url('" + questionStore[progress].img + "')");
}

function userResponse() {
    $('input:button').click(function() {
        let userAnswer = ($(this).val());
        let correctAnswer = `${questionStore[progress].correctAns}`;
        $('.qnaForm').hide();
        if (userAnswer === correctAnswer) {
            generatePositiveFeedback() 
        } else {
            generateNegativeFeedback()
        }
        
    })
}


function generatePositiveFeedback() {
    progress++;
    currentQuestion++;
    score++;
    $('footer').show();
    $('.feedback').show();
    $('.feedback').html(`<p>Correct</p><button type=button class="nextButton">Next</button>`);
    next();
}

function generateNegativeFeedback() {
    progress++;
    currentQuestion++;
    $('footer').show();
    $('.feedback').show();
    $('.feedback').html(`<p>That's Incorrect, the correct answer is ${questionStore[progress-1].correctAns}</p> <button type=button class="nextButton">Next</button>`);    
    next();
}

function next() {
    $('.nextButton').click(function (event) {
    $('.feedback').hide();
    renderPage();
    });
  }
  

function endOfQuiz() {
    $('.finalFeedback').show();
    $('footer').show();
    if (score >= 8) {
        $('.finalFeedback').html(`
        <h3>A true head!</h3><img src="" alt=""/>
        <p>You got ${score} / 10</p><p>You probably should spend less time on whosampled.com</p>
        <button class="restartButton">Restart Quiz</button>`);
      } else if (score < 8 && score >= 5) {
        $('.finalFeedback').html(`
        <h3>Not too shabby!</h3><img src="" alt=""/>
        <p>You got ${score} / 10</p><p>You're on your way to beardstroking greatness</p>
        <button class="restartButton">Restart Quiz</button>`);
      } else {
        $('.finalFeedback').html(`
        <h3>Oh dear!</h3><img src="" alt=""/>
        <p>You got ${score} / 10</p><p>The greatest journey begins with a single step</p>
        <button class="restartButton">Restart Quiz</button>`);
}
    restartQuiz();
}


function restartQuiz() {
    console.log(`restart quiz ran`);
    $('.restartButton').click(function (event) {
      location.reload();
    });
  }



renderStart();

{/* <a href="https://twitter.com/skunkworxlabz?lang=en">twitter</a>
            <a href="https://github.com/williamdiffey">github</a>  
 */}









