import Ember from 'ember';

export default Ember.Component.extend({
  cost: true,
  date: false,

  sortByCost: ['cost:asc'],
  costSortedHouses: Ember.computed.sort('model', 'sortByCost'),

  sortByDate: ['date:asc'],
  dateSortedHouses: Ember.computed.sort('model', 'sortByDate'),

  actions: {
    dateSort() {
      console.log(this.cost);
      this.set('date', true);
      this.set('cost', false);
    },
    costSort() {
      this.set('date', false);
      this.set('cost', true);
    },
    delete(house) {
      if (confirm('Are you sure you want to delete this house?')) {
      this.sendAction('destroyHouse', house);
      }
    }
  }
});
