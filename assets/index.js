
document.addEventListener("DOMContentLoaded",function(){
    let cards = document.getElementsByClassName("card");

    for (let card of cards){
       card.addEventListener("click",function() {
           if (this.getAttribute("data-type")=== "flip")
           checkCard();
       })
    };
})


function runGame() {

}

function runTime() {

}


function checkCard() {

}

function incrementScore(){

}

