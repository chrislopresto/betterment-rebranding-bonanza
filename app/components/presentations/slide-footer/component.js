import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['SlideFooter'],
  classNameBindings: ['alignClassName'],

  align: 'right',
  alignClassName: computed('align', function() {
    return `SlideFooter--${this.get('align')}`;
  })
});
