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
  // createCollection: function(){
  //   let MyCollection = Bb.Collection.extend({
  //     url: 'https://itunes.apple.com/search?term=Frank+Ocean&limit=40&entity=album&country=es',
  //     parse: (data) => {
  //       return data.results;
  //     }
  //   });
  //   let collection = new MyCollection();
  //   collection = this.callCollectionv2(collection);
  // },
  // callCollectionv2: function(coll){
  //   coll.fetch({
  //     async: false,
  //     dataType: 'jsonp',
  //     success: (collection, response, options) => {
  //       return collection;
  //     }
  //   }).then(console.log(coll));
  // },
  callCollection: function(searchTerm) {
    let MyCollection = Bb.Collection.extend({
      url: 'https://itunes.apple.com/search?term=' + searchTerm + '&limit=40&entity=album&country=es',
      parse: (data) => {
        return data.results;
      }
    });
    let collection = new MyCollection();
    collection.fetch({
      dataType: 'jsonp',
      success: (collection, response, options) => {
        this.setCollection(collection);
        this.showChildView('albums', new Albums({collection}));
      }
    })
  },
  setCollection: function(collection){
    this.collection = collection;
    console.log(collection);
  },
  getSearchTerm: function(childView) {
    let searchTerm = childView.$el[0].children[0].value;
    this.callCollection(searchTerm);
    this.firstSearchChangeStyle(); 
  },
  firstSearchChangeStyle: () => {
    $('.header__wrapper').addClass('header__wrapper-searched');
    $('.title__text').addClass('title__text-small');
    $('.title__subtitle').addClass('title__subtitle-hide');
  },
  onRender() {
    this.showChildView('header', Header);
    this.showChildView('searchbar', SearchBar); 
  }
});

let myView = new MyView();

export default myView;