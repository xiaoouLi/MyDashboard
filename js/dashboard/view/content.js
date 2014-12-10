'use strict';

define([
  'jquery',
  'backbone'
  ], function($, Backbone){

    var Content = Backbone.View.extend({

      id: "content-wrapper",

      initialize: function(options){
        this.root = options.root;
      },

      render: function(){
        this.$el.html('<div class="content"></div>');
        this.addContent();
        this.root.append(this.$el);
      },

      addContent: function(title, content) {
        var title = 'About Me',
            inner = '<h1>'+title+'</h1>',
            content = '<pre>喜欢各种美好的东西，爱看帅哥，更爱看美女。</br>'+
                      '可审美观却不可恭维，并在自己另辟的蹊径上越走越远。</br>'+
                      '拖延症犯病的时候，就算急得直哭，也要怠工到底。</br>'+
                      '可一旦某根筋搭错了，忽然想要奋斗，就真的拼起来不要命。</br>'+
                      '我就是矛盾拧巴的天秤天蝎座~</br>'+
                      '一直没觉得自己脑瓜子有多灵光，</br>'+
                      '好在靠偶尔的小聪明和老牛精神，还没有混的太惨。</br>'+
                      '</br>这辈子没有靠上清华北大哈佛耶鲁这样的名校有点儿遗憾。</br>'+
                      '所以开这个博，学习牛牛们敲敲代码，刷刷LC，</br>'+
                      '仅为了我偶然萌发的小小野心 ---</br>'+
                      '我要成为一名Google的美女程序员~~~</br>'+
                      '于是，我拼命三郎模式再次启动~</pre>';
        inner += '<div class="paragraph">'+content+'</div>';
        this.$el.append(inner);

      }





    });

    return Content;
  });