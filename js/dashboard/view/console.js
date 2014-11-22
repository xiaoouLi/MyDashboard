'use strict';

define([
  'jquery',
  'backbone',
  'view/menu',
  'view/container',
  'view/content',
  'view/tab/slim/init',
  'view/tab/blog/init',
  'view/tab/interests/init',
  ], function(
    $
    , Backbone
    , Menu
    , Container
    , Content
    , SlimTab
    , BlogTab
    , InterestsTab
)   {
    var Console = function() {

    };

    Console.prototype = {
      init: function(){
        console.log("login");
        var root, header, menu, container, content, customerAssetChart,
            router, slimTab, blogTab, interestsTab;

        root = $('#root');
        container = new Container({root: root});
        menu = new Menu({root: container});
        content = new Content({root: container});
        router = this.initRouter(menu, slimTab, blogTab, interestsTab);

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
            ''    : 'indexTab',
            'Slim': 'slimTab',
            'Interests': 'interestsTab',
            'Blog': 'blogTab'
          },

          defaultTab: function() {
            console.log('opening default index');
            window.location.hash = '';
          },

          indexTab: function(e) {
            index.getContainer().enable();
            slim.getContainer().disable();
            blog.getContainer().disable();
            interests.getContainer().disable();
            menu.triggerMenuClick(0, 'Slim');
            Backbone.trigger('tab_clicked', 1, 'Pipeline');
          },

          slimTab: function(e) {
            index.getContainer().disable();
            slim.getContainer().enable();
            blog.getContainer().disable();
            interests.getContainer().disable();
            menu.triggerMenuClick(0, 'Slim');
            Backbone.trigger('tab_clicked', 1, 'Pipeline');
          },

          blogTab: function(e) {
            index.getContainer().disable();
            slim.getContainer().disable();
            interests.getContainer().enable();
            blog.getContainer().disable();
            menu.triggerMenuClick(1, 'Blog');
            Backbone.trigger('tab_clicked', 2, 'Snaplex');
          },

          interestsTab: function(e) {
            index.getContainer().disable();
            slim.getContainer().disable();
            interests.getContainer().disable();
            blog.getContainer().enable();
            menu.triggerMenuClick(2, 'Interests');
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