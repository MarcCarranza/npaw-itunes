import Marionette from 'backbone.marionette';
import template from '../templates/album.jst';

let AlbumView = Marionette.View.extend({
  className: 'album__wrapper',
  template: template,
  events: {
    click: 'test'
  },
  test: function(event){
    console.log('Clicked an album');
  }
});

export default AlbumView;
