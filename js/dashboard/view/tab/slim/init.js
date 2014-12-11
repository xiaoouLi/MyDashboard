'user strict';

define ([
  'view/tab/slim/weigthchartpanel',
  'view/tab/slim/workoutpanel',
  'view/tab/slim/dietpanel',
  'view/container'
  ], function(
    WeightPanel
    , WorkoutPanel
    , DietPanel
    , Container
    ) {

    var slimTab = function(options) {
      this.options = options;
    }

    slimTab.prototype = {
      init: function() {
        var slimContainer, weigthPanel, dietPanel, workPanel;
        slimContainer = new Container({root: this.options.rootView});
        weigthPanel = new WeightPanel(this.options);
        workPanel = new WorkoutPanel(this.options);
        dietPanel = new DietPanel(this.options);

        slimContainer.render().addChildView(weigthPanel.render(), 'weigth')
                              .addChildView(workPanel.render(), 'workout')
                              .addChildView(dietPanel.render(), 'diet');



        this.getContainer = function() {
          return slimContainer;
        };
        return this;
      }
    }
    return slimTab;
});