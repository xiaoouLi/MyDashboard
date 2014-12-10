'use strict';

define([
  'jquery',
  'backbone',
  'view/menu',
  'view/container',
  'view/tab/index/init',
  'view/tab/slim/init',
  'view/tab/blog/init',
  'view/tab/interests/init',
  ], function(
    $
    , Backbone
    , Menu
    , Container
    , IndexTab
    , SlimTab
    , BlogTab
    , InterestsTab
)   {
    var Console = function() {

    };

    Console.prototype = {
      init: function(){
        console.log("login");
        var root, header, menu, container, indexTab, customerAssetChart,
            router, slimTab, blogTab, interestsTab, options;

        root = $('#root');
        options = {rootView: root};
        menu = new Menu({rootView: root, router: function() {return router;}});
        indexTab = new IndexTab(options).init();
        slimTab = new SlimTab(options).init();
        blogTab = new BlogTab(options).init();
        interestsTab = new InterestsTab(options).init();
        router = this.initRouter(menu, indexTab, slimTab, blogTab, interestsTab);
      },

      initRouter: function(menu, index, slim, blog, interests) {

      var Router = Backbone.Router.extend({

          history: [],

          initialize: function() {
            this.on('route', function(a, b) {
              this.history.push(Backbone.history.fragment);
            }, this);
          },

          resetHistory: function() {
            this.history = [];
          },

          getPrevious: function() {
            return this.history[this.history.length - 2];
          },

          getHistory: function() {
            return this.history;
          },

          routes: {
            'index'    : 'indexTab',
            'Slim': 'slimTab',
            'Interests': 'interestsTab',
            'Blog': 'blogTab'
          },

          defaultTab: function() {
            console.log('opening default index');
            window.location.hash = '';
          },

          indexTab: function(e) {
            index.showContainer();
            slim.getContainer().disable();
            blog.getContainer().disable();
            interests.getContainer().disable();
            // menu.triggerMenuClick(0, 'Slim');
            Backbone.trigger('tab_clicked', 1, 'Pipeline');
          },

          slimTab: function(e) {
            index.hideContainer();
            slim.getContainer().enable();
            blog.getContainer().disable();
            interests.getContainer().disable();
            // menu.triggerMenuClick(0, 'Slim');
            Backbone.trigger('tab_clicked', 1, 'Pipeline');
          },

          blogTab: function(e) {
            index.hideContainer();
            slim.getContainer().disable();
            interests.getContainer().enable();
            blog.getContainer().disable();
            // menu.triggerMenuClick(1, 'Blog');
            Backbone.trigger('tab_clicked', 2, 'Snaplex');
          },

          interestsTab: function(e) {
            index.hideContainer();
            slim.getContainer().disable();
            interests.getContainer().disable();
            blog.getContainer().enable();
            // menu.triggerMenuClick(2, 'Interests');
            Backbone.trigger('tab_clicked', 2, 'Snaplex');
          },

        });

        var router = new Router();
        Backbone.history.start();
        return router;
      },

    };

    return Console;

  });