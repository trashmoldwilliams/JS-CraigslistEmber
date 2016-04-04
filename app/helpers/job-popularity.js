import Ember from 'ember';

export function jobPopularity(params) {
  var job = params[0];
  if(job.get('pay') >=100) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(jobPopularity);
