import $ from 'jquery';
export class FormHandler {
  constructor(selector) {
    if (!selector) {
      throw new Error('No Selector');
    }
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element of ' + selector);
    }
  }
  addSubmitHandler(fn) {
    console.log('Handling Submission Form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      let data = {};
      $(this).serializeArray().forEach((item) => {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);
      fn(data);
    });
  }
}
export default class{}
