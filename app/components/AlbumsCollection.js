import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Album from './AlbumView';

const AlbumsCollectionView = Marionette.CollectionView.extend({
  className: 'albums__wrapper',
  childView: Album
})

export default AlbumsCollectionView;