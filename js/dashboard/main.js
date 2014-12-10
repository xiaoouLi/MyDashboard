'use strict';
/**
Entry point for dashboard,
require config
**/

require.config({
	baseUrl:'.',
	paths: {
		view: 'js/dashboard/view',
		model: 'js/dashboard/model',
		template: 'js/dashboard/template',

		// 3rd party
		'jquery': 'js/third_party/jquery-1.11.1/jquery',
    'jquery-ui': 'js/third_party/jquery-ui',
    'text': 'js/third_party/text-2.0.10/text',
    'backbone': 'js/third_party/backbone-1.1.2/backbone',
		'underscore': 'js/third_party/underscore-1.6.0/underscore',
		'highcharts': 'js/third_party/highstock-4.0.3/highcharts',
		'highstock': 'js/third_party/highstock-4.0.3/highstock',
	},

  shim: {

    'underscore': {exports: '_'},

    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    'jquery': {exports: '$'},

    'jquery-ui': {
      deps: ['jquery'],
      exports: '$.ui'
    },

    'jquery-dynatree': {deps:['jquery-ui']},


    'datatables': {
      deps: ['jquery']
    },

    'highcharts': {deps: ['jquery']},
    'highstock': {deps: ['jquery']},

  }

});

require([
  'view/console',
  'jquery-ui',
  // 'highstock',
  'highcharts'
], function(Console){
  var app = new Console();
    Highcharts.setOptions({
    lang: {
      rangeSelectorZoom: 'Duration'
    },
    global: {
      useUTC: false
    }
  });
  app.init();
});