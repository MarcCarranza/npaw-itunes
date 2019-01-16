import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import template from '../templates/item.jst';

let TestView = Marionette.View.extend({
  template: template
});

export default TestView;
