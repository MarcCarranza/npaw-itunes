import Marionette from 'backbone.marionette';
import template from '../templates/header.jst';

let Header = Marionette.View.extend({
  className: 'header__wrapper',
  template: template
});

let header = new Header();

export default header;
