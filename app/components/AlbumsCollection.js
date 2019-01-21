import Marionette from 'backbone.marionette';
import Album from './AlbumGridView';

const AlbumsCollectionView = Marionette.CollectionView.extend({
  className: 'albums__wrapper',
  childView: Album
})

export default AlbumsCollectionView;