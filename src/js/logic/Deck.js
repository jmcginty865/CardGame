"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("../models/Card");
/**
 * Created by jennifermcginty on 5/28/17.
 */
var Deck = (function (_super) {
    __extends(Deck, _super);
    function Deck(Rank, Suit) {
        return _super.call(this, Rank, Suit) || this;
    }
    Deck.prototype.Deck = function (Rank, Suit) {
        Rank = Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);
        Suit = Array(1, 2, 3, 4);
        var deckOfCard = new Array[52];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 13; j++) {
                deckOfCard[j * Rank.length + i] = new Card_1.Card(Rank[j], Suit[i]);
            }
        }
        return deckOfCard;
    };
    Deck.prototype.Shuffle = function () {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < this.deckOfCards.length; j++) {
            }
        }
        return this.deckOfCards;
    };
    Deck.prototype.Deal = function () {
        if (this.deckOfCards.length > 0) {
            return this.deckOfCards.shift;
        }
        else {
            var error = "You forgot your cards.";
            return error;
        }
    };
    return Deck;
}(Card_1.Card));
