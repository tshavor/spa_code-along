"use strict";

// CarLot = (function(carLot){
  var cardStyle = {};

  cardStyle.resetCards = function(cards){
    cards.forEach(function(card){
      card.classList.remove("pink")
    })
  }
  cardStyle.styleCard = function(card, pink){
    card.classList.add(pink)
  }
  cardStyle.mirrorText = function(card, userInput){
    userInput.value = card.querySelector("p").innerHTML
    userInput.addEventListener("keyup", function(){
      if (card.classList.contains("pink")){
        card.querySelector("p").innerHTML = userInput.value
      }
    })
  }

module.exports = cardStyle;
