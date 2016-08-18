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
