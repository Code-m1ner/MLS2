window.onload = function(){
    
}

const cards = document.querySelectorAll('.fantasy-card');
// getting all elements from the DOM


const replayBtn = document.querySelector('.replay');

let hasFlippedCard=false;
let lockDeck = false;
let firstCard,secondCard;


function flipCard() {
    if(lockDeck) return;
    if(this === firstCard) return;

    this.classList.add('flip');
    
    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;

        return;
        
    }   
        // second click
    
        secondCard = this;
        
        checkForMatch();

}

    // card matching

function checkForMatch () {

    if (firstCard.dataset.card === secondCard.dataset.card)
       {
           disableCards();

       }    else {
           unflipCards();
       }
}
           
function disableCards () {

    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);

    resetDeck();
}


    // If not a match

function unflipCards () {
    lockDeck = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetDeck();
        
    }, 1500);
}
 
function resetDeck () {
    [hasFlippedCard,lockDeck] = [false, false];
    [firstCard,secondCard] = [null, null];
}

 
(function shuffle() {
    cards.forEach(card => {
        let randompos = Math.floor(Math.random() *12)
        card.style.order = randompos;
    })
})();

cards.forEach(card => card.addEventListener('click',flipCard));

// getting acces to the DOM elements
let seconds = 0;
let minutes = 0;
let countdown = 4;


const timerText = document.getElementById('timer-text');
const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');


function startTimer() {
    seconds++;

    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    

    
    }
    document.getElementById('timer-text').innerHTML ='Time'  + minutes + ':' + seconds
}

function startGame() {
    // starting the countdown with the button click
    interval = window.setInterval(startTimer,1000);
    document.getElementById('btn-strat').innerHTML = "start Game";
    countdown -=1;
    pauseGame();
}

function pauseGame() {
    // pausing the coundown with the button click
    window.clearInterval(interval);
    document.getElementById('btn-pause').innerHTML = "pause Game";
}


//setting the time interval

// clearing the interval
btnPause.addEventListener('click',function () {
      clearInterval(intervalID);
  
});

let stars = document.getElementById('star-list')


/*// reseting the interval
function resetCounter() {
    count = 0;
    timerText.innerHTML = count;
}
*/


// reseting the game

 





    
// get mode element
var mode = document.getElementById('simpleMode');
// get open mode button
var modeBtn = document.getElementById('modeBtn');
// close button
var closeBtn = document.getElementsByClassName('closeBtn')[0]
// adding a click eventListener
modeBtn.addEventListener('click',openMode);
closeBtn.addEventListener('click',closeMode);
// eventListener to outside click
window.addEventListener('click',clickout)

 function openMode(){
     mode.style.display = 'block';
 }

 function closeMode(){
    mode.style.display = 'none';
}

function clickout(e){
    if(e.target == mode){
        mode.style.display = 'none';
    }
    
}



// get form element
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }






  // reset game 
  