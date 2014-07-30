'use strict';

define([
  'jquery',
  'backbone',
  ], function($, Backbone){

    var Content = Backbone.View.extend({

      id: "content",

      initialize: function(options){
        this.root = options.root;
        this.render();
      },

      render: function(){
        // this.$el.html(this.templ());
        this.root.$el.append(this.$el);
      },


    });

    return Content;
  });