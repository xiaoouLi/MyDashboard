'use strict';

define([
  'jquery',
  'backbone',
  'text!template/container.html'
  ], function($, Backbone, HeaderTemp){

    var Header = Backbone.View.extend({
      templ: _.template(HeaderTemp),

      initialize: function(options){
        this.root = options.root;
        this.panels = [];
        this.render();
      },

      render: function(){
        this.root.append(this.$el);
        return this;
      },

      addChildView: function(view, _class) {
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
          this.$el.append(this._addView(view, _class));
        }
        return this;
      },

      _addView: function(view, _class) {
        var len = this.panels.length, el;
        this.panels.push(view);
        el = $('<div/>').append(view.el).addClass('span' + len);
        if(_class) el.addClass(_class);
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