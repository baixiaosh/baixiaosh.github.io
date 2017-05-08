(function(window) {
  var theUA = window.navigator.userAgent.toLowerCase();
  if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
    var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
    if (ieVersion < 10) {
      $("#ie8show").removeClass("hide");
    };
  }
})(window);
