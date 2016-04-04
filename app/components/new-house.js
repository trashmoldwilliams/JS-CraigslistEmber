import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save1() {
      console.log("save1");
      var params = {
        rooms: this.get('rooms'),
        cost: parseInt(this.get('cost')),
        pets: this.get('pets'),
        address: this.get('address'),
        date: Date(),
      };
      this.sendAction('save2', params);
    }
  }
});
