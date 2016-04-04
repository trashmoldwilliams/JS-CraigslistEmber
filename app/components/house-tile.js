import Ember from 'ember';

export default Ember.Component.extend({
  cost: true,
  date: true,

  sortByCost: ['cost:asc'],
  costSortedHouses: Ember.computed.sort('model', 'sortByCost'),

  sortByDate: ['date:asc'],
  dateSortedHouses: Ember.computed.sort('model', 'sortByDate'),

  actions: {
    dateSort() {
      this.set('date', true);
      this.set('cost', false);
    },
    costSort() {
      this.set('date', false);
      this.set('cost', true);
    }
  }


});
