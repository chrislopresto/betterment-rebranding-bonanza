import RevealSlide from 'ember-reveal-js/components/reveal-slide/component';
import Ember from 'ember';

const { computed, inject } = Ember;

export default RevealSlide.extend({
  classNames: ['IframeSlide'],
  classNameBindings:['wormholeEnabledClassName'],
  emberRevealJs: inject.service(),
  currentIndexh: computed.alias('emberRevealJs.indexh'),

  wormholeEnabled: true,
  wormholeEnabledClassName: computed('wormholeEnabled', function() {
    let wormholeEnabled = this.get('wormholeEnabled');
    let modifier = wormholeEnabled ? 'wormholeEnabled' : 'wormholeDisabled';
    return `IframeSlide--${modifier}`;
  }),

  isCurrentSlide: computed('emberRevealJs.indexh', function() {
    return Ember.$(this.element).hasClass('present');
  }),
  renderInPlace: computed('isCurrentSlide', 'wormholeEnabled', function() {
    let wormholeEnabled = this.get('wormholeEnabled');
    if (!wormholeEnabled) {
      return true;
    }
    return !this.get('isCurrentSlide');
  })
});
