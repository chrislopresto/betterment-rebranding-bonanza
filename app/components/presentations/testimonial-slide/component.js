import Ember from 'ember';
import RevealSlide from 'ember-reveal-js/components/reveal-slide/component';

const { computed } = Ember;

export default RevealSlide.extend({
  classNames: ['TestimonialSlide'],
  attributeBindings: [
    'backgroundColor:data-background-color',
    'backgroundTransition:data-background-transition'
  ],

  backgroundColor: "#00bcd4",
  backgroundTransition: "fade",
  centeredVertically: true,
  imageAlt: computed('name', 'description', function() {
    return `${this.get('name')} ${this.get('description')}`;
  })
});
