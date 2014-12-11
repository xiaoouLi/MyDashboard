'user strict';

define([ // will add a model
  'view/simplepanel',
  'view/chartconfig',
  'view/chartpanel',
  ], function(SimplePanel, Config, ChartPanel) {
    var WeigthtChartPanel = SimplePanel.extend(ChartPanel).extend({

      title: 'Workout Records',
      id: 'workout',

      initialize: function(options) {
        var self = this;
        SimplePanel.prototype.initialize.call(this, options);
        this.render();
      },

      render: function() {
        var self = this, options = Config.getConfig('Weight', this.chartXEvents, null, self.legendClickEvent),
            weightData = [
{data:/* Nov 2007 */
[[1196035200000,24.65],
[1196121600000,24.97],
[1196208000000,35.75],
[1196294400000,26.33],
[1196380800000,26.03]], name:'Weight'},
];

        var min = 100, max = 0;
        for(i in weightData[0].data) {
          min = Math.min(min, weightData[0].data[i][1]);
          max = Math.max(max, weightData[0].data[i][1]);
        }
        _.extend(options, {
        tooltip: {
          shared: true, // Tooltip texts for series types with ordered data (not pie, scatter, flags etc) will be shown in a single bubble.
          animation: true,
        },
        yAxis: {
          title: {
            text: 'Weight (Kg)'
          },
          plotLines : [{
                      value : min,
                      color : 'green',
                      dashStyle : 'shortdash',
                      width : 2
                  }, {
                      value : max,
                      color : 'red',
                      dashStyle : 'shortdash',
                      width : 2
                  }]
        },
        navigator: {
          enabled: true,
        },
        series: weightData

      });
        this.getContainer().highcharts( options);
        this.summaryChart = this.getContainer().highcharts();

        setTimeout(function() {
          self.resize(true);
        }, 10);

        return this;
      },

      resize: function(evt){
        var w = this.$el.width(),
            h = $('.container:visible').outerHeight() - 590;
          h = h < 300 ? 300 : h;
          w = w < 300 ? 300 : w;
          this.summaryChart.setSize(w, h);
      },

    });

    return WeigthtChartPanel;
});