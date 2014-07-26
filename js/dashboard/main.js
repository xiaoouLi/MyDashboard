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
		// 'highchart': 'js/third_party/highstock-4.0.3/highchart',
		// 'highstock': 'js/third_party/highstock-4.0.3/highstock',
	}
});

require([
  'view/console',
  'jquery-ui',
  // 'highstock'
], function(Console){
  var app = new Console();
  app.init();
});