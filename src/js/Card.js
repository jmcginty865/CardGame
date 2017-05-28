
var display = document.getElementById("cardsdelt");

var deckOfCard;

function Card(rank, suit){
    this.rank = rank;
    this.suit = suit;
};

var Deck = function(){};

Deck.prototype.deckOfCards = function(){


    var rank = new Array("A", "2", "3","4","5","6","7","8","9","10","Jack","Queen","King");
    var suit = new Array("Clubs","Dimonds","Hearts","Spades");
    deckOfCard = new Array(52);

        for(var i = 0; i < 4; i++){
        for(var j = 0; j < 13; j++){
            deckOfCard[j* rank.length + i] = new Card(value[j], suite[i]);
        }
    }
    return deckOfCard;
};

Deck.prototype.shuffle = function(){
    for(var i = 0; i < 2; i++){
        for(var j = 0; j < deckOfCard.length; j++){
           var cardsDelt = Math.floor(Math.random()* deckOfCards.length);
           var temp = deckOfCard[j];
           deckOfCard[j] = deckOfCard[cardsDelt];
           deckOfCard[cardsDelt] = temp;
        }
    }
    display.innerHTML = "deckOfCards";
    return deckOfCard;
};

function deal() {

    if (this.deckOfCards.length > 0) {
        return this.deck.shift();
    }
    else {
        var error = "You forgot your cards.";
        return error;
    }
};


