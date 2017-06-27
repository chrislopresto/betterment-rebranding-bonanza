import RevealSlide from 'ember-reveal-js/components/reveal-slide/component';

export default RevealSlide.extend({
  classNames: ['BenefitSlide'],
  attributeBindings: [
    'backgroundColor:data-background-color',
    'backgroundTransition:data-background-transition'
  ],

  backgroundColor: "#212121",
  backgroundTransition: "fade",
  detailFragment: true
});
