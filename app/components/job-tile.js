import Ember from 'ember';

export default Ember.Component.extend({
  pay: true,
  date: false,

  sortByPay: ['pay:asc'],
  paySortedJobs: Ember.computed.sort('model', 'sortByPay'),

  sortByDate: ['date:asc'],
  dateSortedJobs: Ember.computed.sort('model', 'sortByDate'),

  actions: {
    dateSort() {
      console.log(this.pay);
      this.set('date', true);
      this.set('pay', false);
    },
    paySort() {
      this.set('date', false);
      this.set('pay', true);
    }
  }
});
