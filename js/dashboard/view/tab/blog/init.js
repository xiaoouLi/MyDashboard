'user strict';

define ([
  // 'view/tab/slim/weigthChart',
  'view/container'
  ], function(
    // Chart,
    Container) {

    var blogTab = function(options) {
      this.options = options;
    }

    blogTab.prototype = {
      init: function() {
        var blogContianer = new Container({root: this.options.rootView});
        blogContianer.render();
        this.getContainer = function() {
          return blogContianer;
        };
        return this;
      }
    }
    return blogTab;
});