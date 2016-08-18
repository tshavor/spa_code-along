"use strict";

  var cardStyles = require ('./style');

  var activateEvents = function() {
    var cards = document.querySelectorAll(".carCard");
    cards.forEach(function(card){
      card.addEventListener("click", function(){
        var userInput = document.querySelector("#userInput");
        userInput.value = "";
        userInput.focus();
        cardStyles.resetCards(cards);;
        cardStyles.styleCard(card, "pink");
        cardStyles.mirrorText(card, userInput);
      });
    });
  };
  // return carLot
// })(CarLot);

module.exports = activateEvents;
