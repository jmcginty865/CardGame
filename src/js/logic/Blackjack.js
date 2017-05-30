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
var Deck_1 = require("./Deck");
/**
 * Created by jennifermcginty on 5/29/17.
 */
var Blackjack = (function (_super) {
    __extends(Blackjack, _super);
    function Blackjack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Blackjack;
}(Deck_1.Deck));
