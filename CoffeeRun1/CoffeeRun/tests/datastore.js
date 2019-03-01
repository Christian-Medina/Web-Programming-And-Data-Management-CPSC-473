//Node.js does not support process, process=>process
(function(process) {
  'use strict';
  var App = process.App || {};

  function DataStore() {
    this.data = {};
  }
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };
  DataStore.prototype.getAll = function() {
    return this.data;
  };
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };
  App.DataStore = DataStore;
  process.App = App;
})(process);
