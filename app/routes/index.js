import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    houses: this.store.findAll('house'),
    jobs: this.store.findAll('job')
  });
  },
  actions: {
    saveHouse(params) {
      var newHouse = this.store.createRecord('house', params);
      newHouse.save();
      this.transitionTo('index');
    },
    saveJob(params) {
      var newJob = this.store.createRecord('job', params);
      console.log(params);
      console.log(newJob);
      newJob.save();
      this.transitionTo('index');
    },
    destroyHouse(house) {
      house.destroyRecord();
      this.transitionTo('index');
    }
  }
});
