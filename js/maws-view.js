/*jslint asi: true*/
/*jshint indent:3, laxbreak:true */
/* global mithril */

//link template for header/footer menu
var links = function(items){
   return   m('ul', [
                (items || [])
                .map(function(item){
                   return m('a', {class: item.class, href: item.url, title: item.title}, item.value)
                })
            ])     
}

//header menu
var menu = function(items){
   return   m('#menu', [ 
               links(items)
            ])
}

//header image
var header = function(header){
   return m('a', {href: header.url, class: header.class}, [
             m('img', {src: header.src})
          ])
}

//main article content
var content = function(content){
   return [m('h1', content.title),
           m('.subtitle', content.subtitle),
           m('article.content', content.article)]
}

//footer menu e.g., social media, etc.
var footerMenu = function(items){
   return   m('#footer-menu', [
               links(items)
            ])
}

//footer, e.g., website copyright, tagline, etc.
var footer = function(footer){
   return   m('footer.footer', [
               m('p', footer.text)
            ])
}

//put all content together
var mainContent = function(mithHeader, mithContent, mithMenuFooter, mithFooter){
   return m('#main', [mithHeader].concat(mithContent, mithMenuFooter, mithFooter))
}

//put all views together
var main = function(ctrl){
   var config = ctrl.config
   return [menu(config.menuItems), mainContent(header(config.header), content(config.content), footerMenu(config.footerItems), footer(config.footer))]
}
