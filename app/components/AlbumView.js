import Marionette from 'backbone.marionette';
import template from '../templates/item.jst';

let AlbumView = Marionette.View.extend({
  template: template,
  events: {
    click: 'test'
  },
  test: function(event){
    console.log('a');
  }
});

export default AlbumView;
