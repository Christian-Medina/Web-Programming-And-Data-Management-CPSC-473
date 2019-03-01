(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied');
    }
    this.serverUrl = url;
  }

  RemoteDataStore.prototype.getAll = function() {
    return $.ajax(this.serverUrl, {
      type: 'GET',
      async: false,
      success: function(serverResponse) {
        //do nothing
      },
      error: function(serverResponse) {
        console.log(serverResponse.responseText);
      }
    });
  };
  RemoteDataStore.prototype.get = function(key) {
    return $.ajax(this.serverUrl, {
      type: 'GET',
      data: {
        customerEmail: key
      },
      success: function(response) {
        //nothing
      },
      error: function(serverResponse) {
        console.log("error" + serverResponse.responseText);
      }
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    //save URL so it doesnt fall out of scope
    var url = this.serverUrl;
    var response = $.ajax(this.serverUrl, {
      type: 'GET',
      data: JSON.stringify({
        customerEmail: key
      }),
      success: function() {
        //Gets first response just in case
        //there is more than one JSON object in the responseText
        //var id = response.responseJSON[0];
        var customerArray = response.responseJSON;
        var question;
        for (var i = 0; i < customerArray.length; i++) {
          if (customerArray[i].emailCustomer == key) {
            question = customerArray[i];
          }
        }
        $.ajax(url + '/' + question.id, {
          type: 'DELETE',
          error: function(serverResponse) {
            console.log(serverResponse.responseText);
          }
        });
      },
      error: function(serverResponse) {
        console.log(serverResponse.responseText);
      }
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
})(window);
