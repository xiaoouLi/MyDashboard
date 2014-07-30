'use strict';

define([
  'jquery',
  'backbone',
  'text!template/menu.html'
  ], function($, Backbone, MenuTemp){

    var Menu = Backbone.View.extend({
      templ: _.template(MenuTemp),
      id: "menu",

      initialize: function(options){
        this.root = options.root;
        this.render();
      },

      render: function(){
        this.$el.html(this.templ({menus:this.createMenu()}));
        this.root.$el.append(this.$el);
      },

      createMenu: function(){
        var menu = [
        "Money",
        "Health",
        "My Painting",
        "My Songs"
        ];
        return menu;
      },

      isActive: function(){

      },

      enableTab: function(idx){

      }

    });
    return Menu;
  });