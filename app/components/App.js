import Marionette from 'backbone.marionette';
import CollectionView from './CollectionView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(CollectionView);
  }
});
