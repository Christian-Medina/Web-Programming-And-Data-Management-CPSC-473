'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormHandler = exports.FormHandler = function () {
  function FormHandler(selector) {
    _classCallCheck(this, FormHandler);

    if (!selector) {
      throw new Error('No Selector');
    }
    this.$formElement = (0, _jquery2.default)(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element of ' + selector);
    }
  }

  _createClass(FormHandler, [{
    key: 'addSubmitHandler',
    value: function addSubmitHandler(fn) {
      console.log('Handling Submission Form');
      this.$formElement.on('submit', function (event) {
        event.preventDefault();
        var data = {};
        (0, _jquery2.default)(this).serializeArray().forEach(function (item) {
          data[item.name] = item.value;
          console.log(item.name + ' is ' + item.value);
        });
        console.log(data);
        fn(data);
      });
    }
  }]);

  return FormHandler;
}();

var _class = function _class() {
  _classCallCheck(this, _class);
};

exports.default = _class;
