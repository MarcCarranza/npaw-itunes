import Marionette from 'backbone.marionette';
import CollectionView from './Test';
import Header from './Header';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    CollectionView.render();
  }
});
