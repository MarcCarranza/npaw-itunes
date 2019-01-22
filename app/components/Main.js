import Mn from 'backbone.marionette';
import Bb from 'backbone'
import Header from './Header';
import SearchBar from './SearchBar';
import Albums from './AlbumsCollection';
import Pages from './Pages';

let MyView = Mn.View.extend({
  el: '#container',
  page: 1,
  pages: [],
  template: false,
  collection: [],
  regions: {
    header: '#header',
    searchbar: '#searchbar',
    albums: '#albums',
    pages: '#pages'
  },
  childViewEvents: {
    'searchClick': 'getSearchTerm',
    'pageClick': 'getPageClick'
  },

  // Collection Functions
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
  setCollection: function(collection) {
    this.collection = collection;
  },
  resetCollection: function() {
    this.collection = [];
  },
  // Pages functions
  resetPages: function() {
    this.pages = [];
  },
  calculateCollectionPages: function() {
    this.resetPages();
    let albumsCollectionSize = this.collection.length;
    if (albumsCollectionSize > 19) {
      let pagesInteger = Math.floor(albumsCollectionSize / 20);
      let pagesDecimal = albumsCollectionSize / 20;
      if (pagesInteger < pagesDecimal) {
        ++pagesInteger;
      }
      for (let i = 0; i < pagesInteger; i++) {
        this.pages.push(i + 1);
      }
    }
    this.showChildView('pages', new Pages({pagesArray: this.pages}));
    this.calculateAlbumsPerPage();
  },
  calculateAlbumsPerPage: function() {
    let MyCollection = Bb.Collection.extend();
    let albumsCollection;
    let lastAlbum = 20 * this.page;
    let firstAlbum = lastAlbum - 20;
    albumsCollection = new MyCollection(this.collection.slice(firstAlbum, lastAlbum));
    this.setAlbumsView(albumsCollection);
  },
  getPageClick: function() {
    let clickedPage = $('.page__link-active').text();
    clickedPage = parseInt(clickedPage);
    this.setPage(clickedPage);
    this.calculateAlbumsPerPage();
  },
  setPage: function(currentPage) {
    this.page = currentPage;
  },

  // Search functions
  firstSearchChangeStyle: () => {
    $('.header__wrapper').addClass('header__wrapper-searched');
    $('.title__text').addClass('title__text-small');
    $('.title__subtitle').addClass('title__subtitle-hide');
  },
  getSearchTerm: function(childView) {
    let searchTerm = childView.$el[0].children[0].value;
    this.resetCollection();
    this.callCollection(searchTerm);
    this.firstSearchChangeStyle(); 
  },

  // Render functions
  setAlbumsView: function(collection) {
    this.showChildView('albums', new Albums({collection}));
  },
  onRender() {
    this.showChildView('header', Header);
    this.showChildView('searchbar', SearchBar); 
  }
});

let myView = new MyView();

export default myView;