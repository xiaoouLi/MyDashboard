'user strict';

define([
   'view/content' // each panel is a file
  ], function( Content ) {
    // this is not a view, so we don't use Backbone view constructor
    // and we don't use 'this' very often
    var IndexTab = function(options) {
      this.options = options;
    };

    IndexTab.prototype = {
      init: function() {
        var indexContent = new Content({root: this.options.rootView});
        indexContent.render();

        this.getContainer = function() {
          return indexContent;
        };
        this.hideContainer = function() {
          indexContent.$el.hide();
        };
        this.showContainer = function() {
          indexContent.$el.show();
        }
        return this;
      },
    };

    return IndexTab;
});
