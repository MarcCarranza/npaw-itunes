import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Album from './AlbumView';

let MyCollection = Backbone.Collection.extend({
  url: 'https://itunes.apple.com/search?term=lizard+wizard&limit=20&entity=album&country=es',
  parse: (data) => {
    return data.results;
  }
});

let collection = new MyCollection();

collection.fetch({
  dataType: 'jsonp',
  success: (collection, response, options) => {
    console.log('Fetching success!');
  }
});


const AlbumsCollectionView = Marionette.CollectionView.extend({
  className: 'albums__wrapper',
  childView: Album
})

let albumsView = new AlbumsCollectionView({
  collection
});

export default albumsView;