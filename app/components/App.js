import Marionette from 'backbone.marionette';
import CollectionView from './Main';

export default Marionette.Application.extend({
  region: '#app',
  onBeforeStart() {
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
      options.crossDomain = {
        crossDomain: true
      };
      options.xhrFields = {
        withCredentials: true
      };
    });
  },
  onStart() {

    CollectionView.render();
  }
});
