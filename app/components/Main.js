import Mn from 'backbone.marionette';
import Header from './Header';
import Albums from './AlbumsCollection';

const MyView = Mn.View.extend({
  el: '#container',
  template: false,
  regions: {
    header: '#header',
    albums: '#albums'
  },
  onRender() {
    this.showChildView('header', Header);
    this.showChildView('albums', Albums);
  }
});
const myView = new MyView();

export default myView;