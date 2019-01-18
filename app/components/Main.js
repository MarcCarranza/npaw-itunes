import Mn from 'backbone.marionette';
import Header from './Header';
import SearchBar from './SearchBar';
import Albums from './AlbumsCollection';

let MyView = Mn.View.extend({
  el: '#container',
  template: false,
  regions: {
    header: '#header',
    searchbar: '#searchbar',
    albums: '#albums'
  },
  childViewEvents: {
    'testChild': 'testF'
  },
  testF: (childView) =>{
    console.log(childView.$el[0].children[0].value);
  },
  onRender() {
    this.showChildView('header', Header);
    this.showChildView('searchbar', SearchBar);
    this.showChildView('albums', Albums); 
  }
});
let myView = new MyView();

export default myView;