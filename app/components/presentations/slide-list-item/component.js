import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['SlideListItem'],
  classNameBindings: ['typeClassName'],

  type: '',
  typeClassName: computed('type', function() {
    return `SlideListItem--${this.get('type')}`;
  })
});
