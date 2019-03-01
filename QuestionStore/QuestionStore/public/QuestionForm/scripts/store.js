(function(window) {
  'use strict';
  var App = window.App || {};

  function Store(storeId, db) {
    this.storeId = storeId;
    this.db = db;
  }

  //Create Order
  Store.prototype.createOrder = function(order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  //Removing order after Deliver
  Store.prototype.deliverOrder = function(customerId) {
    console.log('Delivering order for ' + customerId);
    this.db.remove(customerId);
  };

  Store.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log('Store #' + this.storeId + ' has pending orders:');
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Store = Store;
  window.App = App;

})(window);
