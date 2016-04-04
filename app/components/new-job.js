import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      console.log("saveJob");
      var params = {
        title: this.get('jobTitle'),
        pay: this.get('pay'),
        date: Date(),
      };
      this.sendAction('saveJob', params);
    }
  }
});
