import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  pay: DS.attr(),
  date: DS.attr()
});
