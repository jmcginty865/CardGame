/**
 * Created by jennifermcginty on 5/28/17.
 */

export class Card{
    Suit?: number[];
    Rank?: number[];

    constructor(Suit: number, Rank: number){
         this.Suit.push(Suit);
         this.Rank.push(Rank);
    }


}
