(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }

  //Add question order to server
  RemoteDataStore.prototype.add = function(key, val) {
    $.ajax(this.serverUrl, {
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        emailCustomer: key,
        questionOrder: val.question,
        questionDetail: val.detail,
        questionType: val.topic,
        state: val.state,
        customerName: val.name
      }),
      success: function() {},
      error: function(xhr) {
        console.log(xhr.responseText);
      }
    });
  };


  App.RemoteDataStore = RemoteDataStore;
  window.App = App;


})(window);
