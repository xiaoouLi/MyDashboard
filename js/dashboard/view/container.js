'use strict';

define([
  'jquery',
  'backbone',
  'text!template/container.html'
  ], function($, Backbone, HeaderTemp){

    var Header = Backbone.View.extend({
      templ: _.template(HeaderTemp),
      id: "container",

      initialize: function(options){
        this.root = options.root;
        this.render();
      },

      render: function(){
        // this.$el.html(this.templ());
        this.root.append(this.$el);
      },


    });

    return Header;
  });