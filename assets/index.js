const cards = document.querySelectorAll('.fantasy-card');

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

function incrementScore(){

}


// running time for the game
const timeM = document.querySelector('h2');
let timeSecond = 90;


displayTime(timeSecond)

const runningTime = setInterval (() => {
    timeSecond--;
    displayTime(timeSecond);
    if(timeSecond <= 0 || timeSecond < 1) {
        endTime();
        clearInterval(runningTime);
    }
},1000)

function displayTime(second) {
    let min = Math.floor(second / 60);
    let sec = Math.floor(second % 60);
    timeM.innerHTML = `${min < 10 ? '0': ''}${min}:${sec < 10 ? '0': ''}${sec}`
}
  function endTime() {
      timeM.innerHTML = 'Time Out!';
  }


