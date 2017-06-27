import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['SlideHeader'],
  classNameBindings: ['alignClassName'],

  align: 'left',
  alignClassName: computed('align', function() {
    return `SlideHeader--${this.get('align')}`;
  })
});
