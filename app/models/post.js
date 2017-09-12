import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  user: DS.belongsTo('user')
});
