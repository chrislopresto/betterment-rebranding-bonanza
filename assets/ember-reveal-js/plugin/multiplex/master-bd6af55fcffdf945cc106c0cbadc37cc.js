(function(){function e(){var e={state:Reveal.getState(),secret:t.secret,socketId:t.id}
n.emit("multiplex-statechanged",e)}if(!window.location.search.match(/receiver/gi)){var t=Reveal.getConfig().multiplex,n=io.connect(t.url)
Reveal.addEventListener("slidechanged",e),Reveal.addEventListener("fragmentshown",e),Reveal.addEventListener("fragmenthidden",e),Reveal.addEventListener("overviewhidden",e),Reveal.addEventListener("overviewshown",e),Reveal.addEventListener("paused",e),Reveal.addEventListener("resumed",e)}})()
