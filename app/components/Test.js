import Mn from 'backbone.marionette';
import Header from './Header';
import Albums from './CollectionView';

const MyView = Mn.View.extend({
  el: '#container',
  template: false,
  regions: {
    region1: '#region1',
    region2: '#region2'
  },
  onRender() {
    this.showChildView('region1', Header);
    this.showChildView('region2', Albums); // Preferred method for showing child views
  }
});
const myView = new MyView();

export default myView;