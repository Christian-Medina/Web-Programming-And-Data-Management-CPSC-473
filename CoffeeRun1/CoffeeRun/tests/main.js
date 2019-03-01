//Node.js does not support window, window=>process
(function(process) {
  'use strict';
  //for Node.js
  eval(require('fs').readFileSync('tests/truck.js', 'utf8'));
  eval(require('fs').readFileSync('tests/datastore.js', 'utf8'));
  var App = process.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var myTruck = new Truck('ncc-1701', new DataStore());
  process.myTruck = myTruck;
  //for Node.js
  eval(require('fs').readFileSync('tests/truck.js', 'utf8'));
  eval(require('fs').readFileSync('tests/datastore.js', 'utf8'));
})(process);
