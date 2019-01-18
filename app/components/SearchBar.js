import Marionette from 'backbone.marionette';
import template from '../templates/searchBar.jst';

let SearchBarView = Marionette.View.extend({
  className: 'searchbar__wrapper',
  template: template,
  triggers: {
    'click #searchbar__button': 'searchClick'
  }
});

let searchBar = new SearchBarView();

export default searchBar;
