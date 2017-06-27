import RevealSlide from 'ember-reveal-js/components/reveal-slide/component';

export default RevealSlide.extend({
  classNames: ['QuoteSlide'],
  attributeBindings: [
    'backgroundColor:data-background-color',
    'backgroundTransition:data-background-transition'
  ],

  backgroundColor: "#00bcd4",
  backgroundTransition: "fade",
  centeredVertically: true
});
