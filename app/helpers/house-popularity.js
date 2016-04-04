import Ember from 'ember';

export function housePopularity(params) {
  var house = params[0];
  if(house.get('cost') <=100) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-pawn"></span>');
  }
}

export default Ember.Helper.helper(housePopularity);
