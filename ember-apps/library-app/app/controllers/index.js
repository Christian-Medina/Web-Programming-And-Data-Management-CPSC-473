import Ember from 'ember';

export default Ember.Controller.extend({


  emailAddress: '',
  isDisabled: Ember.computed.empty('emailAddress')

});
