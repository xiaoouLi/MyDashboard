'use strict';

define([
  'backbone',
  'jquery',
  'text!template/panel.html'
], function(Backbone, $, tmpl, InfoboxTmpl) {

  var SimplePanel = Backbone.View.extend({

    __templ: _.template(tmpl),

    title: 'Panel',

    initialize: function() {
      var self = this, header = true,
        opts = arguments[0],
        listener = arguments[1], //child view's model/col
        id = '';
        if (arguments[2]){
          id = arguments[2];
        }
      if(opts.headless && opts.headless === true) {
        header = false;
      }
      this.$el.html(this.__templ({header: header}));
      this.$header = this.$('.header span').html(this.title).parent();
      this.$container = this.$('div.panel-container');
      this.$container.attr("id",id);
      this.$el.addClass('panel');
      // opts.baseHeader.on('menu-clicked', function(what, name) {
      //   if(what === self.tabMenuIdx) {
      //     self.startPolling();
      //     self.resize && self.resize(true);
      //   } else {
      //     self.stopPolling();
      //   }
      // });

      // this._busy = false;
      // if(opts.class) {
      //   this.addClass(opts.class);
      // }
      // if(opts.width) {
      //   this.getContainer().width(+opts.width);
      // }
      // this._noMask = false;
      // if(opts.noMask) {
      //   this._noMask = true;
      // }
      // this.listener = listener;
      // this.tabMenuIdx = -1;
    },

    setTabMenuIndex: function(arg) {
      this.tabMenuIdx = arg;
    },

    startPolling: function() {
      this.listener.startPolling &&
        this.listener.startPolling();
    },

    stopPolling: function() {
      this.listener.stopPolling &&
        this.listener.stopPolling();
    },

    getHeader: function() {
      return this.$header;
    },

    getContainer: function() {
      return this.$container;
    },

    reFlow: function() {
      throw new Error('Child container needs to overload this method');
    },

    isBusy: function() {
      return this._busy;
    },

    busy: function() {
      this._busy = true;
      if(!this._noMask) this.getContainer().append(this.mask);
    },

    unbusy: function() {
      this.mask.remove();
      this._busy = false;
    },

    resetTimeCtl: function() {
      Backbone.trigger('reset-time-control');
    },

    resetInsightsTimeCtl: function() {
      Backbone.trigger('reset-insights-time-control');
    },

    addClass: function(c) {
      this.$el.addClass(c);
    },

    setSubTitle: function(txt) {
      this.$header.text(this.title +  ': ' + txt);
    },

    show: function() {
      this.$el.show();
    },

    hide: function() {
      this.$el.hide();
    },

    visible: function() {
      this.$el.css('visibility','visible');
    },

    hidden: function() {
      this.$el.css('visibility','hidden');
    },

    resetHeader: function(title) {
      title = title ? title : this.title;
      this.$header.html('<span>' + title + '</span>');
    },

    displayMessage: function(message, error, autoclose) {
      var self = this;
      error = error || false;
      message = message || '';
      clearTimeout(this.__infotimer);
      this.removeMessage(true);
      this.getContainer().append(this.infoboxtempl({
        error: error,
        message: message
      }));
      this.infoBox = this.$('div.infobox');
      if(this.infoBox.outerWidth() > 0) {
        this.infoBox.css({
          'margin-left': -this.infoBox.outerWidth() / 2,
          'margin-right': this.infoBox.outerWidth() / 4
        });
      }
      this.infoBox.stop(true, true).fadeToggle('slow', 'linear');
      if(autoclose !== false) {
        this.__infotimer = setTimeout(function() {
          self.removeMessage();
        }, 5000);
      }
    },

    removeMessage: function(noanim) {
      var self = this;
      if(noanim) {
        this.infoBox && this.infoBox.remove();
      } else {
        this.infoBox && this.infoBox.fadeToggle('slow', function() {
          self.infoBox.remove();
        });
      }
    }
  });

  return SimplePanel;
});
