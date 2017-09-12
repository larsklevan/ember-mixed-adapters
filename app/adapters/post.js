import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  user: DS.belongsTo('user')
});
