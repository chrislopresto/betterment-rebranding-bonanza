var RevealMath=window.RevealMath||function(){var e=Reveal.getConfig().math||{}
e.mathjax=e.mathjax||"https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js",e.config=e.config||"TeX-AMS_HTML-full",function(e,a){var t=document.querySelector("head"),n=document.createElement("script")
n.type="text/javascript",n.src=e
var i=function(){"function"==typeof a&&(a.call(),a=null)}
n.onload=i,n.onreadystatechange=function(){"loaded"===this.readyState&&i()},t.appendChild(n)}(e.mathjax+"?config="+e.config,function(){MathJax.Hub.Config({messageStyle:"none",tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],skipTags:["script","noscript","style","textarea","pre"]},skipStartupTypeset:!0}),MathJax.Hub.Queue(["Typeset",MathJax.Hub]),MathJax.Hub.Queue(Reveal.layout),Reveal.addEventListener("slidechanged",function(e){MathJax.Hub.Queue(["Typeset",MathJax.Hub,e.currentSlide])})})}()
