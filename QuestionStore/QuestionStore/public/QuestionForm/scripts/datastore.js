(function(window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    this.data = {}
  }

  //Function add data
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  }

  //Function get data
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };

  //Function get all data
  DataStore.prototype.getAll = function() {
    return this.data;
  };

  //Function delete data
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };
  App.DataStore = DataStore;
  window.App = App;


})(window);
