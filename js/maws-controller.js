/*jslint asi: true*/
/*jshint indent:3, laxbreak:true */
/* global mithril */

//Controller used with mithril
function Controller(){
   this.config = config
}

Controller.prototype.update = function(object){

   //assign any new keys over the previous keys and create new plain object
   var newConfig = assign({}, this.config, object)

   //replace old config
   this.config = newConfig

}
