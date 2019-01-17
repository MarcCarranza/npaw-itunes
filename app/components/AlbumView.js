import Marionette from 'backbone.marionette';
import template from '../templates/item.jst';

let AlbumView = Marionette.View.extend({
  template: template
});

export default AlbumView;
