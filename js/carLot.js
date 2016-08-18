"use strict";

// var CarLot = (function () {
  var carInventory = require ('./carLotPromises');
  var eventStuff = require ('./events');
  // var inventory = [];

  // return {
    var getInventory: function () {
      return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        callback(inventory);
      });
      inventoryLoader.send();
    }
  // };


// this is "Object Literal Shorthand" from ES6
module.exports = {getInventory, loadInventory};//this is how we expose things publically with Browserify
