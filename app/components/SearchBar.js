import Marionette from 'backbone.marionette';
import template from '../templates/searchBar.jst';

let SearchBarView = Marionette.View.extend({
  className: 'searchBar',
  template: template,
  triggers: {
    'click #search__button': 'testChild'
  },
  getSearchValue: () => {
    console.log($('#search__input')[0].value);
  }
});

let searchBar = new SearchBarView();

export default searchBar;
