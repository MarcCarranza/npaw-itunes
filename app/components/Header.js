import Marionette from 'backbone.marionette';
import template from '../templates/main.jst';

let Header = Marionette.View.extend({
  template: template
});

let header = new Header();

export default header;