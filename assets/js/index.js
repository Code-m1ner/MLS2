window.onload = function(){
    
}

const cards = document.querySelectorAll('.fantasy-card');
// getting all elements from the DOM

let hasFlippedCard=false;
let lockDeck = false;
let firstCard;
let secondCard;
let cardsMatched = 0;


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
    if (firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        cardsMatched++;
        if (cardsMatched == 8) {
            document.getElementById('win-game-modal').style.display = 'block';
        }
    } else {
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
        
    }, 1200);
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

// getting access to the DOM elements
let seconds = 60;
let minutes = 0;
let countdown = 4;


const timerText = document.getElementById('timer-text');

// craeting the function for the time --------------
function startTimer() {
    seconds--;
    let stringSeconds = '';
    if (seconds < 10) {
        stringSeconds = '0' + seconds.toString();
    } else {
        stringSeconds = seconds;
    }
    if (seconds > 0) {
        document.getElementById('time-counter').innerHTML = stringSeconds;
    }
    // check if time runs out
    if (seconds == 0) {
        // do some function to say you lost
        alert('You lost!');
        document.getElementById('retry').innerText;
        // Show a pop-up that says play again / take me back to the main page

        document.getElementById('time-counter').innerHTML = '0';
    }
}

function startGame() {
    document.getElementById('game-box').style.display = 'block';
    // starting the countdown with the button click
    interval = window.setInterval(startTimer,1000);
    
}

// paly again function on the win game mode button
function relaod(){
    document.getElementById("play-bTn").window.location.reload();
}


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

  function openLevel(){
    document.getElementById("level-div").style.display = "block";
  }
  function openManual(){
    document.getElementById("myManual").style.display = "block";
  }



