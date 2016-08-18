(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// var CarLot = (function () {
  // var eventStuff = require ('./events');
  var inventory = [];

  // return {
    var getInventory = function () {
      return inventory;
    };
    var loadInventory = function () {
      return new Promise(function (resolve, reject){

       // this is the promise
        var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();

        inventoryLoader.addEventListener("load", function () {
          inventory = JSON.parse(this.responseText).cars;
          resolve(inventory);
        });
      })
    }
  // };


// this is "Object Literal Shorthand" from ES6
module.exports = {getInventory, loadInventory};//this is how we expose things publically with Browserify

},{}],2:[function(require,module,exports){
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

},{"./style":4}],3:[function(require,module,exports){
"use strict";

var carInventory= require('./CarLot');
var eventStuff= require('./events');


// (function(){
  var populatePage = function (inventory) {
    var output = document.querySelector(".output");
    var results = "";
    inventory.forEach(function(car, i){
      if (i % 3 === 0) {
      results += `<div class="row">`
    }
      results += `
      <div class="col-md-4 carCard" style="border-color: ${car.color}">
      <h3>${car.make}</h3>
      <h3>${car.model}</h3>
      <h3>${car.year}</h3>
      <h3>$${car.price}</h3>
      <h3>${car.color}</h3>
      <h3>${car.purchased}</h3>
      <p>${car.description}</p>
      </div>
      `
      if ((i + 1) % 3 === 0) {
    results += `</div>`;
    }
    });
    output.innerHTML = results;

    eventStuff();
  }

module.exports = {populatePage};

  carInventory.loadInventory().then(function(data){
    populatePage(data);
  });
// })();

},{"./CarLot":1,"./events":2}],4:[function(require,module,exports){
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

},{}]},{},[3]);
