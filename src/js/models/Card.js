"use strict";
/**
 * Created by jennifermcginty on 5/28/17.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Card = (function () {
    function Card(Suit, Rank) {
        this.Suit.push(Suit);
        this.Rank.push(Rank);
    }
    return Card;
}());
exports.Card = Card;
