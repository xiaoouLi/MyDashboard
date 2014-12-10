'user strict';

define ([
  // 'view/tab/slim/weigthChart',
  'view/tab/slim/weigthchartpanel',
  'view/container'
  ], function(
    WeightPanel
    , Container
    ) {

    var slimTab = function(options) {
      this.options = options;
    }

    slimTab.prototype = {
      init: function() {
        var slimContainer, weigthPanel;
        slimContainer = new Container({root: this.options.rootView});
        weigthPanel = new WeightPanel(this.options);
        slimContainer.render().addChildView(weigthPanel.render(), 'weigth');




        this.getContainer = function() {
          return slimContainer;
        };
        return this;
      }
    }
    return slimTab;
});