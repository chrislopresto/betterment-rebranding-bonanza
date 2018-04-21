import RevealPresentation from 'ember-reveal-js/controllers/reveal-presentation';

export default RevealPresentation.extend({
  queryParams: ['f', 's', 'ss', 'm'],

  init() {
    setTimeout(() => {
      window.$(document).ready(function() {
        window.$("pre code").each(function(i, block) {
          window.hljs.highlightBlock(block);
        });
      });
    }, 0);
  }
});
