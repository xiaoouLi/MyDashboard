'user strict';

define([ // will add a model
  'view/simplepanel',
  'view/chartconfig',
  'view/chartpanel',
  ], function(SimplePanel, Config, ChartPanel) {
    var WeigthtChartPanel = SimplePanel.extend(ChartPanel).extend({

      title: 'Weigtht Trends',
      id: 'weight-chart',

      initialize: function(options) {
        var self = this;
        SimplePanel.prototype.initialize.call(this, options);
        this.render();
      },

      render: function() {
        var options = Config.getConfig('Weight', this.chartXEvents, null, self.legendClickEvent),
            data = [
{data:/* Nov 2007 */
[[1196035200000,24.65],
[1196121600000,24.97],
[1196208000000,25.75],
[1196294400000,26.33],
[1196380800000,26.03]], name:'Weight'},

];

        _.extend(options, {
        tooltip: {
          shared: true, // Tooltip texts for series types with ordered data (not pie, scatter, flags etc) will be shown in a single bubble.
          animation: true,
        },

        navigator: {
        enabled: true,
      },

        series: data

      });
        this.getContainer().highcharts( options);
        this.summaryChart = this.getContainer().highcharts();
        return this;
      },

    });

    return WeigthtChartPanel;
});