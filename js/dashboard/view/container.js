'use strict';

define([
  'jquery',
  'backbone',
  'text!template/container.html'
  ], function($, Backbone, HeaderTemp){

    var Header = Backbone.View.extend({
      templ: _.template(HeaderTemp),
      className: 'container-wrapper',

      initialize: function(options){
        var self = this, interval;
        this.root = options.root;
        this.panels = [];
        this.render();
        $(window).resize(function(evt) {
          clearInterval(interval);
          interval = setTimeout(function() {
            self.reFlow(evt);
          }, 10);
        });
      },

      reFlow: function(evt) {
        _.each(this.panels, function(item) {
          item.resize && item.resize(evt);
        });
      },

      render: function(){
        this.root.append(this.$el);
        return this;
      },

      addChildView: function(view, _id) {
        if(_.isArray(view)) {
          var el = $('<div/>').addClass('group span expanded');
          for(var v in view) {
            var obj = view[v];
            if(obj.length === 2) {
              el.append(this._addView(obj[0], obj[1]));
            } else {
              el.append(this._addView(obj[0]));
            }
          }
          this.$el.append(el);
        } else {
          this.$el.append(this._addView(view, _id));
        }
        return this;
      },

      _addView: function(view, _id) {
        var len = this.panels.length, el;
        this.panels.push(view);
        el = $('<div/>').append(view.el);
        if(_id) el.attr('id', _id);
        return el;
      },
      disable: function() {
        this.$el.hide();
        return this;
      },

      enable: function() {
        this.$el.show();
        return this;
      },

    });

    return Header;
  });