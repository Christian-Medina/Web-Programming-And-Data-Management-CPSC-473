import FormHandler from './formhandler';
let FORM_SELECTOR = '[data-coffee-order="form"]';
let formhandler = new FormHandler(FORM_SELECTOR);
formhandler.addSubmitHandler((fn) => {});
