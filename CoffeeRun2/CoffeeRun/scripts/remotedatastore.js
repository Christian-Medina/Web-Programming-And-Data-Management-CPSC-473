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
  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
    });
  };
  RemoteDataStore.prototype.getAll = function(cb) {
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + '?{"category": "' + key + '"}', function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  RemoteDataStore.prototype.remove = function(key) {
    var temp;
    var url=this.serverUrl;
    $.get(this.serverUrl + '?{"category": "' + key + '"}', function(serverResponse) {
      console.log(serverResponse);
      temp = serverResponse['0']['id'];
      $.ajax(url+ '/' + temp, {
        type: 'DELETE'
      });
    });
  };
  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
