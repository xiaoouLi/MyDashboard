'use strict';

define([
  'jquery'
], function($) {

  /**
   * @private default chart configs
   */
  var ChartConfig = function() {
    var config = {
      exporting: { buttons: { contextButton: { enabled: false}}},

      chart: {

        width: 350,
        height: 320,
      },

      title: {
        text: ''
      },

      credits: {
        enabled: false
      },

      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          millisecond: '%H:%M:%S',
          month: '%e. %b',
          year: '%b'
        }
      },

      yAxis: {
        min: 0,
        allowDecimals: false,
        title: {
          text: ''
        }
      },

      legend: {
        enabled: false,
        align: 'center',
        backgroundColor: '#F6F8FB',
        borderColor: 'black',
        borderWidth: 1
      },

      tooltip: {
        formatter: function() {
          return Highcharts.dateFormat('%A, %b %e, %Y, %H:%M', this.x) +
            '<br><b>' + this.series.name + '</b>: ' + this.y;
        }
      },

      navigator: {
        enabled: true,
        series: {
          dataGrouping: {
            enabled: false,
          },
        },
      },

      scrollbar: {
        enabled: false,
        liveRedraw: false
      },

      rangeSelector: {
        selected: 0,
        inputEnabled: false,
        buttons: [{
          type: 'week',
          count: 1,
          text: '1 Week'
        }, {
          type: 'month',
          count: 1,
          text: '1 Month'
        }, {
          type: 'month',
          count: 3,
          text: '3 Month'
        }, {
          type: 'all',
          text: 'All'
        }],
        buttonSpacing: 5,
        buttonTheme: {
          r: 3,
          width: 60
        }
      },

      plotOptions: {
        series: {
          dataGrouping: {
            enabled: false
          },
          visible: true,
          line: {
            animation: {
                duration: 10
            },
          },
          turboThreshold: 0,
          marker: {
            enabled: true
          },
          shadow: false,
          lineWidth: 3.5,
          states: {
            hover: {
              lineWidth: 4.5
            }
          }
        },

        line: {
          animation: {
                duration: 10
            },

          dataGrouping: {
            enabled: false
          },

          // events: {
          //   legendItemClick: function () {
          //               alert('I am an alert');
          //               //return false; // <== returning false will cancel the default action
          //           }
          // },

          // animation: false,
          turboThreshold: 0,
          marker: {
            enabled: true,
          },
          shadow: false,
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1
            }
          }
        }
      }
    };

    this.getConfig = function() {
      return $.extend({}, config);
    };
  };

  /**
   * A simple config dispenser.
   */
  var Dispenser = {
    getConfig: function(yaxisTitle, xAxisEvents, chartEvents, legendEvent) {
      yaxisTitle = yaxisTitle || '';
      var clone = new ChartConfig().getConfig();
      if(typeof(xAxisEvents) === typeof({})) {
        clone.xAxis.events = xAxisEvents;
      }
      if(typeof(chartEvents) === typeof({})) {
        clone.chart.events = chartEvents;
      }
      if(yaxisTitle !== '') {
        clone.yAxis.title.text = yaxisTitle;
      }
      if(legendEvent){
        clone.plotOptions.line.events = {legendItemClick:legendEvent};
      }
      return clone;
    }
  };

  return Dispenser;
});
