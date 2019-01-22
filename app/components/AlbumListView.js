import Marionette from 'backbone.marionette';
import template from '../templates/album.jst';

let AlbumListView = Marionette.View.extend({
  className: 'album__wrapper',
  template: template
});

export default AlbumListView;