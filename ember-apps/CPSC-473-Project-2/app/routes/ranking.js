import Route from '@ember/routing/route';

//Sort Data from server
export default Route.extend({
  model(){
    return this.store.findAll('user').then(results => results.sortBy('score').reverse());
  }
});
