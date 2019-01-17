import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import item from './AlbumView';

let MyCollection = Backbone.Collection.extend({

});

let collection = new MyCollection([
  {name: 'Marc'},
  {name: 'Carranza'}
]);

const MyCollectionView = Marionette.CollectionView.extend({
    childView: item
})

let albumsView = new MyCollectionView({ collection });

export default albumsView;