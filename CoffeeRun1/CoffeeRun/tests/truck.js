//Node.js does not support window, window=>process
(function(process) {
  'use strict';
  var App = process.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }
  Truck.prototype.createOrder = function(order) {
    console.log('Adding order for' + order.email.Address);
    this.db.add(order.emailAddress, order);
  };
  Truck.prototype.deliverOrder = function(customerId) {
    console.log('Delivering order for' + customerId);
    this.db.remove(customerId);
  };
  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());
    console.log('Truck #' + this.truckId + ' has pending orders:');
    customerIdArray.forEach(function(id) {
      console.log(this.db.get(id));
    }.bind(this));
  };
  App.Truck = Truck;
  process.App = App;
})(process);
