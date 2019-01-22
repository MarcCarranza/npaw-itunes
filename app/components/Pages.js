import Marionette from 'backbone.marionette';
import template from '../templates/pages.jst';

let PagesView = Marionette.View.extend({
  className: 'pages__wrapper',
  template: template,
  templateContext: {
    pagesArray: []
  },
  events: {
    'click a': 'setActivePage'
  },
  triggers: {
    'click a': 'pageClick'
  },
  setActivePage: function(e) {
    $('.page__link').removeClass('page__link-active');
    $(e.currentTarget).addClass('page__link-active');
  },
  onBeforeRender() {
    this.templateContext.pagesArray = this.options.pagesArray;
  }
});

export default PagesView;