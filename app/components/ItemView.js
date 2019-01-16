import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import template from '../templates/item.jst';

let MyCollection = Backbone.Collection.extend({

});

let collection = new MyCollection([
  {name: 'Marc'},
  {name: 'Carranza'}
]);

let TestView = Marionette.View.extend({
  template: template
});

let albumView = new TestView({collection: collection})

export default albumView;
