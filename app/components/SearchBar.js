import Marionette from 'backbone.marionette';
import template from '../templates/searchBar.jst';

let SearchBarView = Marionette.View.extend({
  className: 'searchbar__wrapper',
  template: template,
  triggers: {
    'click #searchbar__button': 'searchClick'
  },
  detectEnter: function(view) {
    $(document).on('keypress',function(e) {
      if (e.which === 13) {
        view.triggerMethod('searchClick', view);
      }
    });
  },  
  onRender() {
    this.detectEnter(this);
  }
});

let searchBar = new SearchBarView();

export default searchBar;
