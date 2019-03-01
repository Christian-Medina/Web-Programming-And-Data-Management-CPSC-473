(function(window) {
  'use strict';
  var CHECKLIST_SELECTOR = '[pending-questions="checklist"]';
  var SERVER_URL = 'http://localhost:2403/questionstore';
  var App = window.App;
  var Question = App.Question;
  var RemoteDataStore = App.RemoteDataStore;
  var CheckList = App.CheckList;
  var remoteDS = new RemoteDataStore(SERVER_URL);
  var checkList = new CheckList(CHECKLIST_SELECTOR, remoteDS);
  var customerArray = checkList.getArray();
  for (var i = 0; i < customerArray.length; i++) {
    checkList.addRow(customerArray[i]);
    checkList.addClickHandlers(i);
  }
  //close button handler
  document.getElementById("close").addEventListener("click", function() {
    document.getElementById("questionDetails").style.visibility = "hidden";
  });
})(window);
