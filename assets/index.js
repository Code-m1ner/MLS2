const cards = document.querySelectorAll('.fantasy-card');

let hasFlippedCard=false;
let firstCard,secondCard;


function flipCard() {
    this.classList.toggle('flip');
    
    if (!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;

        
    }   else {
        // second click
        hasFlippedCard = false;
        secondCard = this;
        
        // card matching
       if (firstCard.dataset.card === secondCard.dataset.card)
       {
           // got it!
           firstCard.removeEventListener('click',flipCard);
           secondCard.removeEventListener('click',flipCard);

       } else {
           //not a match
           setTimeout(() => {
           firstCard.classList.remove('flip');
           secondCard.classList.remove('flip');
           }, 1500);
       }
       
    }
    
}
cards.forEach(card => card.addEventListener('click',flipCard));


function runGame() {

}

function runTime() {

}


function checkCard() {

}

function incrementScore(){

}

