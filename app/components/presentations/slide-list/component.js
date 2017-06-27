import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['SlideList'],
  classNameBindings: ['typeClassName'],

  type: '',
  typeClassName: computed('type', function() {
    return `SlideList--${this.get('type')}`;
  })
});
