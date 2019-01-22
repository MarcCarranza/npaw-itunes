import Marionette from 'backbone.marionette';
import templateGrid from '../templates/albumGrid.jst';
import templateList from '../templates/albumList.jst';

let AlbumGridView = Marionette.View.extend({
  className: 'album__wrapper',
  getTemplate: function() {
    return templateGrid;
  }
});

export default AlbumGridView;