// All constant variables assigned here
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const cards = document.querySelectorAll('.fantasy-card');
const timerText = document.getElementById('timer-text');
let manual = document.getElementById('manual-head'); // get mode element
let manBtn = document.getElementById('manBtn'); // get open mode button
let closeBtn = document.getElementsByClassName('closeBtn')[0]

// All flexible variables assigned here
let hasFlippedCard = false;
let lockDeck = false;
let firstCard;
let secondCard;
let cardsMatched = 0;

let seconds = 80;
let minutes = 0;
let countdown = 4;

/* Onload call functions */
// Shuffle cards
(function shuffle() {
    cards.forEach(card => {
        let randompos = Math.floor(Math.random() * 12);
        card.style.order = randompos;
    });
})();

cards.forEach(
    card => card.addEventListener('click', flipCard)
);



// adding a click eventListener to manBtn
manBtn.addEventListener('click', openMan);

// eventListener to outside click for instruction's div
window.addEventListener('click', clickOut);

/* Event specific functions below */
// Flip card function
function flipCard() {
    if (lockDeck) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
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
function checkForMatch() {
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

// If matched: function to disable card click-flip
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetDeck();
}

// If not a match
function unflipCards() {
    lockDeck = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetDeck();

    }, 1200);
}


function resetDeck() {
    [hasFlippedCard, lockDeck] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Creating the function for the time
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
        document.getElementById('loose-game-modal').style.display = 'block';
        
        // Show a pop-up that says play again / take me back to the main page

        document.getElementById('time-counter').innerHTML = '0';
    }
}

function startGame(level) {
    closeLevel();
    if (level == 'easy') {
        seconds = 80;
    } else if (level == 'medium') {
        seconds = 60;
    } else {
        seconds = 30;
    }
    // Adjust the heading styling
    document.getElementById('heading-context').style.marginTop = '2%';
    document.getElementById('heading-context').style.marginBottom = '0px';
    // Hide main menu
    document.getElementById('menu-selection-buttons').style.display = 'none';
    // Show game screen
    document.getElementById('game-box').style.display = 'block';
    // starting the countdown with the button click
    interval = window.setInterval(
        startTimer, 
        1000
    );

}

//function to display the instructions div
function openMan() {
    manual.style.display = 'block';
}
// allows the user to click anywhere on the opened div of the instruction to close it
function clickOut(e) {
    if (e.target == manual) {
        manual.style.display = 'none';
    }
}

// Open the form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Close button of the feedback
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Close button of the feedback
function closeLevel() {
    document.getElementById("levels").style.display = "none";
}

// getting the levels pop up div to display
function openLevel() {
    document.getElementById("levels").style.display = "block";
}

// Open button of the feedback
function openInstruction() {
    document.getElementById("manual-head").style.display = "block";
}

// Close button of the feedback
function closeInstruction() {
    document.getElementById("manual-head").style.display = "none";
}

// Show instructable image
function showInstructableImage(instructable) {
    // Hide all
    document.getElementById('img-difficulty-level').style.display = 'none';
    document.getElementById('img-click-a-card').style.display = 'none';
    document.getElementById('img-matched').style.display = 'none';
    document.getElementById('img-time-management').style.display = 'none';
    // Display specific
    document.getElementById('img-' + instructable).style.display = 'inline';
}