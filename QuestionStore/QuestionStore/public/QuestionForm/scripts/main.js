(function(window) {
  'use strict';
  var FORM_SELECTOR = '[data-question-make="form"]';
  var SERVER_URL = 'http://localhost:2403/questionstore';
  var App = window.App;
  var Store = App.Store;
  var DataStore = App.DataStore;
  var RemoteDataStore = App.RemoteDataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  //var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var webshim = window.webshim;
  var myStore = new Store('ncc-1701', remoteDS);
  window.myStore = myStore;


  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function(data) {
    myStore.createOrder.call(myStore, data);
    location.href = 'thankyou.html';
  });

  formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);
