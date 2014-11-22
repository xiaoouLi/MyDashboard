'use strict';

define([
  'jquery',
  'backbone',
  // 'text!template/content.html'
  ], function($, Backbone){

    var Content = Backbone.View.extend({

      id: "content",

      initialize: function(options){
        this.root = options.root;
        this.render();
      },

      render: function(){
        // this.$el.html(this.templ());
        this.$el.html('<h1 id="title">All my dream come true!</h1>');
        this.root.$el.append(this.$el);
      },


    });

    return Content;
  });