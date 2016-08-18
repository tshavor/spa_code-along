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
