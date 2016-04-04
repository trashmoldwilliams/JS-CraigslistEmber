import DS from 'ember-data';

export default DS.Model.extend({
  rooms: DS.attr(),
  cost: DS.attr(),
  pets: DS.attr(),
  address: DS.attr(),
  date: DS.attr()
});
