'use strict';

var _formhandler = require('./formhandler');

var _formhandler2 = _interopRequireDefault(_formhandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FORM_SELECTOR = '[data-coffee-order="form"]';
var formhandler = new _formhandler2.default(FORM_SELECTOR);
formhandler.addSubmitHandler(function (fn) {});
