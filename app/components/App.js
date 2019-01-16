import Marionette from 'backbone.marionette';
import CollectionView from './Main';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    CollectionView.render();
  }
});
