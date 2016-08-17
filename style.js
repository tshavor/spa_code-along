CarLot = (function(carLot){
  carLot.resetCards = function(cards){
    cards.forEach(function(card){
      card.classList.remove("pink")
    })
  }
  carLot.styleCard = function(card, pink){
    card.classList.add(pink)
  }
  carLot.mirrorText = function(){

  }
  return carLot
})(CarLot);