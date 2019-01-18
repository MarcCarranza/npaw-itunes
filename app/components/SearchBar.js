import Marionette from 'backbone.marionette';
import template from '../templates/searchBar.jst';

let SearchBarView = Marionette.View.extend({
  className: 'searchBar',
  template: template,
  triggers: {
    'click #search__button': 'searchClick'
  }
});

let searchBar = new SearchBarView();

export default searchBar;
