'user strict';

define ([
  // 'view/tab/slim/weigthChart',
  'view/container'
  ], function(
    // Chart,
    Container) {

    var interestsTab = function(options) {
      this.options = options;
    }

    interestsTab.prototype = {
      init: function() {
        var interestsContianer = new Container({root: this.options.rootView});
        interestsContianer.render();
        this.getContainer = function() {
          return interestsContianer;
        };
        return this;
      }
    }
    return interestsTab;
});