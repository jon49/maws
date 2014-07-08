/*jslint asi: true*/
/*jshint indent:3, laxbreak:true */
/* global mithril, mawsConfig */

var m = mithril

var mawsLinks = function(items){
   return   m('ul', [
                items.map(function(item){
                   return m('a', {class: item.class, href: item.url, title: item.title}, item.value)
                })
            ])     
}

var mawsMenu = function(menuItems){
return   m('#menu', [ 
            mawsLinks(menuItems)
         ])
}
