'use strict';

define([
  'jquery',
  'backbone',
  'text!template/menu.html'
  ], function($, Backbone, MenuTemp){

    var Menu = Backbone.View.extend({
      templ: _.template(MenuTemp),
      id: "menu",

      events: {
        'click .menu-item': 'onMenuClick',
      },

      initialize: function(options){
        this.root = options.rootView;
        this.router = options.router;
        this.render();
      },

      render: function(){
        this.$el.html(this.templ());
        this.root.append(this.$el);
      },

      onMenuClick: function(evt) {
        var that = $(evt.currentTarget);
        var text = $(evt.currentTarget).find('.tab-big-title').text();
        if(text === 'Index') {
          window.location.hash = '';
        } else {
          window.location.hash = text;
        }

        return false;
      },

      isActive: function(){

      },

      enableTab: function(idx){

      }

    });
    return Menu;
  });