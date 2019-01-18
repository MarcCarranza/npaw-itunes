import Mn from 'backbone.marionette';
import Bb from 'backbone'
import Header from './Header';
import SearchBar from './SearchBar';
import Albums from './AlbumsCollection';

let MyView = Mn.View.extend({
  el: '#container',
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
  callCollection: function(searchTerm) {
    let MyCollection = Bb.Collection.extend({
      url: 'https://itunes.apple.com/search?term=' + searchTerm + '&limit=20&entity=album&country=es',
      parse: (data) => {
        return data.results;
      }
    });
    let collection = new MyCollection();
    collection.fetch({
      dataType: 'jsonp',
      success: (collection, response, options) => {
        return collection;
      }
    }); 
    return collection; 
  },
  getSearchTerm: function(childView) {
    let searchTerm = childView.$el[0].children[0].value;
    let collection = this.callCollection(searchTerm);
    this.showChildView('albums', new Albums({collection})); 
  },
  onBeforeRender() {
    this.collection = this.callCollection('frank+ocean');
  },
  onRender() {
    let collection = this.collection;
    this.showChildView('header', Header);
    this.showChildView('searchbar', SearchBar);
    this.showChildView('albums', new Albums({collection})); 
  }
});

let myView = new MyView();

export default myView;