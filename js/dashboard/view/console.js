'use strict';

define([
  'jquery',
  'backbone',
  'view/header',
  'view/menu',
  'view/container',
  'view/content'

  ], function(
    $
    , Backbone
    , Header
    , Menu
    , Container
    , Content
){
    var Console = function() {

    };

    Console.prototype = {
      init: function(){
        console.log("login");
        var root, header, menu, container, content, customerAssetChart;

        root = $('#root');
        // console.log(root);
        // header = new Header({root: root});
        container = new Container({root: root});
        menu = new Menu({root: container});
        content = new Content({root: container});



      }

    };

    return Console;

  });