class Card {
    constructor(type, value, name){
        this.type = type;
        this.value = value;
        this.name = name;
    }
    print(){
        console.log(this);
    }

    toString(){
        return this.type + ' ' + this.name;
    }
};

// CREATE DECK LIST

const createDeck = () =>{
    
    const typeList = ["♠", "♥", "♦", "♣"];
    var deck = [];

    for(let type of typeList){
        for(let i = 2; i<11; i++ ){
            deck.push(new Card(type, i,`${i}`));
        }
        deck.push(new Card(type, 10 , 'K'));
        deck.push(new Card(type, 10 , 'Q'));
        deck.push(new Card(type, 10 , 'J'));
        deck.push(new Card(type, 11 , 'A'));
    }
return deck;
}

var playerHand = [];
var computerHand = [];
var deck = createDeck();

const getRandomCard = () =>{
    
   let randomInt =  Math.floor(Math.random()*deck.length);
   return deck.splice(randomInt, 1)[0];
};


const getValue = (hand) => {
    var sum = 0;
    for(let i = 0; i<hand.length; i++){
        sum = sum + hand[i].value;
    }
    return sum;
};

document.getElementById('playButton').addEventListener('click', () => {
    playerHand.push(getRandomCard());
    playerHand.push(getRandomCard());
    console.log(playerHand);
    console.log(getValue(playerHand));

    computerHand.push(getRandomCard());
    computerHand.push(getRandomCard());
    
    document.getElementById('userScore').innerHTML = `User Score ; ${getValue(playerHand)}`
    document.getElementById('compScore').innerHTML = `Computer Score ; ${getValue(computerHand)}`
    document.getElementById('compCards').innerHTML = 'Computer Cards ; <br>'+ computerHand[0].toString() + ', ' + computerHand[1].toString()
    document.getElementById('userCards').innerHTML = 'User Cards ; <br>' + playerHand[0].toString() + ', ' + playerHand[1].toString()
    

});
