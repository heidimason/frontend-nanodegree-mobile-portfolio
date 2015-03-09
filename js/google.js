// To delay loading of Google font until page is finished loading
var cb = function() {
  var l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = '//fonts.googleapis.com/css?family=Open+Sans:400,700';
  var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
};
var raf = requestAnimationFrame || mozRequestAnimationFrame ||
    webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(cb);
else window.addEventListener('load', cb);


// Google Analytics
(function(w,g){w['GoogleAnalyticsObject']=g;
w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments)};w[g].l=1*new Date();})(window,'ga');

// TODO: replace with your Google Analytics profile ID.
ga('create', 'UA-XXXX-Y');
ga('send', 'pageview');