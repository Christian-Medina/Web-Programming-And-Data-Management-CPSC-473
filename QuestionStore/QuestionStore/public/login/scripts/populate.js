(function(window) {
  'use strict';

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector, db) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    this.$element = $(selector);
    this.db = db;
    if (this.$element.length === 0) {
      throw new Error('Could not find element with selector ' + selector);
    }
  }
  var index = 0;

  CheckList.prototype.removeRow = function() {
    this.$element
      .closest('tr')
      .remove();
  };

  CheckList.prototype.addRow = function(question) {
    var rowElement = new Row(question);
    this.$element.append(rowElement.$element);
  };

  CheckList.prototype.getArray = function() {
    var response = this.db.getAll();
    var customerArray = response.responseJSON;
    return customerArray;
  };

  CheckList.prototype.getQuestion = function(key) {
    var response = this.db.getAll();
    var customerArray = response.responseJSON;
    var question;
    for (var i = 0; i < customerArray.length; i++) {
      if (customerArray[i].emailCustomer == key) {
        return customerArray[i];
      }
    }
  };

  CheckList.prototype.addClickHandlers = function(indexer) {
    var deleteButtonId = 'deleteButton-' + indexer;
    var readButtonId = 'readButton-' + indexer;
    document.getElementById(deleteButtonId).addEventListener("click", function() {
      var $row = $(this).closest("tr");
      var email = $row.find(".email").text();
      $row.remove();
      checklist.db.remove(email);
    });
    var checklist = this;
    document.getElementById(readButtonId).addEventListener("click", function() {
      document.getElementById("questionDetails").style.visibility = "visible";
      var $row = $(this).closest("tr");
      var email = $row.find(".email").text();
      var question = checklist.getQuestion(email);
      $('span.question-title').text(question.questionOrder);
      $('span.question-details').text(question.questionDetail);
      document.getElementById("replyButton").addEventListener("click", function() {
        var redirectLink = 'mailto:' + question.emailCustomer +
          '?subject=RE:' + question.questionOrder +
          '&body=You Wrote:%0D%0A' + question.questionDetail +
          '%0D%0A%0D%0AReply:%0D%0A%0D%0A%0D%0A';
        location.href = redirectLink;
      });
    });
  };

  function Row(question) {
    var $tr = $('<tr></tr>');
    var readButtonId = 'readButton-' + index;
    var deleteButtonId = 'deleteButton-' + index;
    var $readButton = $('<button id="' + readButtonId + '">Read</button>');
    var $deleteButton = $('<button id="' + deleteButtonId + '">Delete</button>');

    var $firstCell = $('<td class="name"></td>');
    var $secondCell = $('<td class="email"></td>');
    var $thirdCell = $('<td class="questionType"></td>');
    var $fourthCell = $('<td class="state"></td>');
    var $fifthCell = $('<td></td>');
    var $sixthCell = $('<td></td>');

    $firstCell.append(question.customerName);
    $secondCell.append(question.emailCustomer);
    $thirdCell.append(question.questionType);
    $fourthCell.append(question.state);
    $fifthCell.append($readButton);
    $sixthCell.append($deleteButton);
    $tr.append($firstCell);
    $tr.append($secondCell);
    $tr.append($thirdCell);
    $tr.append($fourthCell);
    $tr.append($fifthCell);
    $tr.append($sixthCell);
    this.$element = $tr;
    index++;
  }

  App.CheckList = CheckList;
  window.App = App;
})(window);
