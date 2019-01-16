import Marionette from 'backbone.marionette';
import CollectionView from './CollectionView';
import Header from './Header';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(Header);
    this.showView(CollectionView);
  }
});
