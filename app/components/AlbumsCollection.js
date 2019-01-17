import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Album from './AlbumView';

let MyCollection = Backbone.Collection.extend({
  url: 'https://itunes.apple.com/search?term=jack+johnson&limit=25',
  parse: (data) => {
    return data.results;
  }
});

let apiCollection = new MyCollection();
apiCollection.fetch({
  dataType: 'jsonp',
  success: (collection, response, options) => {
    console.log(collection.length);
  }
});

let collection = new MyCollection([{
    name: 'Marc'
  },
  {
    name: 'Carranza'
  }
]);

const MyCollectionView = Marionette.CollectionView.extend({
  childView: Album,
})

let albumsView = new MyCollectionView({
  collection,
  onRender(){

  }
});

export default albumsView;