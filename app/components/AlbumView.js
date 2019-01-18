import Marionette from 'backbone.marionette';
import template from '../templates/album.jst';

let AlbumView = Marionette.View.extend({
  className: 'album__wrapper',
  template: template
});

export default AlbumView;
