import Mn from 'backbone.marionette';
import Bb from 'backbone'
import Header from './Header';
import SearchBar from './SearchBar';
import Albums from './AlbumsCollection';

let MyView = Mn.View.extend({
  el: '#container',
  page: 1,
  template: false,
  collection: [],
  regions: {
    header: '#header',
    searchbar: '#searchbar',
    albums: '#albums'
  },
  childViewEvents: {
    'searchClick': 'getSearchTerm'
  },
  firstSearchChangeStyle: () => {
    $('.header__wrapper').addClass('header__wrapper-searched');
    $('.title__text').addClass('title__text-small');
    $('.title__subtitle').addClass('title__subtitle-hide');
  },
  callCollection: function(searchTerm) {
    let MyCollection = Bb.Collection.extend({
      url: 'https://itunes.apple.com/search?term=' + searchTerm + '&limit=65&entity=album&country=es',
      parse: (data) => {
        return data.results;
      }
    });
    let collection = new MyCollection();
    collection.fetch({
      dataType: 'jsonp',
      success: (collection, response, options) => {
        this.setCollection(collection);
        this.calculateCollectionPages();
      }
    })
  },
  setCollection: function(collection){
    this.collection = collection;
  },
  calculateCollectionPages: function(){
    let albumsCollection = this.collection;
    let i = albumsCollection.length;
    console.log(i/20);
    console.log(i%20);
    while( i > 19){
      albumsCollection.remove(albumsCollection.models[i]);
      i--;
    }
    this.setAlbumsView(albumsCollection);
  },
  setAlbumsView: function(collection){
    this.showChildView('albums', new Albums({collection}));
  },
  getSearchTerm: function(childView) {
    let searchTerm = childView.$el[0].children[0].value;
    this.callCollection(searchTerm);
    this.firstSearchChangeStyle(); 
  },
  onRender() {
    this.showChildView('header', Header);
    this.showChildView('searchbar', SearchBar); 
  }
});

let myView = new MyView();

export default myView;