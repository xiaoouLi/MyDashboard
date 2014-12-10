'use strict';

define([
  'jquery',
  'backbone',
  'text!template/header.html'
  ], function($, Backbone, HeaderTemp){

    var Header = Backbone.View.extend({
      templ: _.template(HeaderTemp),
      id: "header",

      initialize: function(options){
        this.root = options.rootView;
        this.render();
      },

      render: function(){
        this.$el.html(this.templ());
        this.root.append(this.$el);
      },


    });

    return Header;
  });