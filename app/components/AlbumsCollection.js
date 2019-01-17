import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Album from './AlbumView';

let MyCollection = Backbone.Collection.extend({
  url: 'https://itunes.apple.com/search?term=jack+johnson&limit=25',
  parse: (data) => {
    return data.results;
  }
});

let collection = new MyCollection();

collection.fetch({
  dataType: 'jsonp',
  success: (collection, response, options) => {
    console.log(collection);
  }
});


const MyCollectionView = Marionette.CollectionView.extend({
  childView: Album,
})

let albumsView = new MyCollectionView({
  collection
});

export default albumsView;