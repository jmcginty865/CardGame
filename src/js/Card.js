
var display = document.getElementById("cardsdelt")
function card(value, suit){
    this.value = value;
    this.suit = suit;
};

function Deck(){
    this.deck = new Array(52);

    var value = new Array("A", "2", "3","4","5","6","7","8","9","10","Jack","Queen","King");
    var suit = new Array("Clubs","Dimonds","Hearts","Spades");

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 13; j++){
            this.deck[i*value.length + j] = new Card(value[j], suite[i]);
        }
    }
    this.suffle = suffle;
    this.deal = deal;
}

function shuffle(){
    for(var i = 0; i < 10; j++){
        for(var j = 0; j < this.deck.length; j++){
           delt = Math.floor(Math.random()* this.deck.length);
           temp = this.deck[j];
           this.deck[j] = this.deck[delt];
           this.deck[delt] = temp;
        }
    }
};

function deal() {

    if (this.deck.length > 0) {
        return this.deck.shift();
    }
    else return null;
};

var deck = new Deck();
deck.shuffle();
for (i = 0; i < 2; i++) {
    for (j = 0; j < 4; j++) {
        var Card;
        Card = deck.deal();
    }
    display.innerHTML = Card;
}






