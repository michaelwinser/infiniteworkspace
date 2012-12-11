'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var module = angular.module('myApp.services', []).
  value('version', '0.1');

module.service('objects', [function() {
  var self = this;
  self.objects = [];
  self.object_index = {};

  self.AddObject = function(id, x, y, text) {
    var o = {id: id, x:x, y:y, text:text};
    self.objects.push(o);
    self.object_index[id] = o;
  }


  self.AddObject(1, 100, 100, 'hello @ 10,10');
  self.AddObject(2, 200, 200, 'hello @ 20, 20');

  
  console.log("objects");
  self.objects.forEach(function(object) { 
    console.log("object", object.id, object.x, object.y, object.text);
  });
}]);
