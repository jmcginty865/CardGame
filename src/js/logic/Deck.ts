import {Card} from "../models/Card";
/**
 * Created by jennifermcginty on 5/28/17.
 */

class Deck extends Card {

    private deckOfCards: any;
    constructor(Rank,Suit){
        super(Rank,Suit);
    }

    Deck(Rank,Suit){
        Rank = Array(1,2,3,4,5,6,7,8,9,10,11,12,13,14);
        Suit = Array(1,2,3,4);

       var deckOfCard = new Array[52];

       for(let i = 0; i < 4; i++){
           for(let j = 0; j <13; j++){
               deckOfCard[j * Rank.length + i] = new Card(Rank[j], Suit[i]);
           }
       }
       return deckOfCard;
    }

    Shuffle(){
        for(let i = 0; i < 2; i++){
            for(let j = 0; j < this.deckOfCards.length; j++){

            }
        }
        return this.deckOfCards;
    }
    Deal(){
        if(this.deckOfCards.length > 0){
            return this.deckOfCards.shift;
        }
        else{
            var error = "You forgot your cards.";
            return error;
        }
    }
}