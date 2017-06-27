import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['SlideColumn'],

  align: 'left',
  alignClassName: computed('align', function() {
    return `SlideColumn--${this.get('align')}`;
  })
});
