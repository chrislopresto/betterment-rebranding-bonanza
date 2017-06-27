import Ember from 'ember';

const { computed } = Ember;
const { capitalize } = Ember.String;

export default Ember.Component.extend({
  classNames: ['SlideBody'],
  classNameBindings: [
    'alignClassName',
    'alignItemsClassName',
    'columnsClassName',
    'displayClassName'
  ],

  align: 'left',
  alignClassName: computed('align', function() {
    return `SlideBody--align${capitalize(this.get('align'))}`;
  }),

  alignItems: 'flex-start',
  alignItemsClassName: computed('alignItems', function() {
    return `SlideBody--alignItems${capitalize(this.get('alignItems'))}`;
  }),

  columns: 1,
  columnsClassName: computed('columns', function() {
    return `SlideBody--columns${this.get('columns')}`;
  }),

  display: 'flex',
  displayClassName: computed('display', function() {
    return `SlideBody--display${capitalize(this.get('display'))}`;
  })

});
