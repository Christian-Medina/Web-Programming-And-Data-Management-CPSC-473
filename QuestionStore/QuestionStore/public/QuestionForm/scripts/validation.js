(function(window) {
  'use strict';
  var App = window.App || {};

  var Validation = {
    isCompanyEmail: function(email) {
      return /.+\.com|.edu|.net|.org|.us$/.test(email);
    }
  };

  App.Validation = Validation;
  window.App = App;
})(window);
