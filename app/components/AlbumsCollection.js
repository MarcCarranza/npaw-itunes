import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import Album from './AlbumView';

let MyCollection = Backbone.Collection.extend({
  url: 'https://itunes.apple.com/search?term=jack+johnson&limit=25'
});

function testCall(){
  $.ajax({
    url: 'https://itunes.apple.com/search?term=jack+johnson&limit=25',
    type: 'GET',
    success: function (data) {
      console.log('o-kei');
    },
    error: function (data) {
      console.log('error');
    }
  })
}

let apiCollection = new MyCollection();

let collection = new MyCollection([{
    name: 'Marc'
  },
  {
    name: 'Carranza'
  }
]);

const MyCollectionView = Marionette.CollectionView.extend({
  childView: Album,
  onRender() {
    testCall();
  }
})

let albumsView = new MyCollectionView({
  collection
});

export default albumsView;