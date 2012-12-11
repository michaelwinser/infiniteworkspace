'use strict';

/* Controllers */


var controllers = angular.module('myApp.controllers', ['myApp.services']);

function WorkspaceController($scope, objects, version) {
  var scalex = 0.1
  var scaley = 0.1

  $scope.version = version;
  $scope.something = 'something'
  $scope.objects = objects.objects;
  $scope.AddObject = function(x, y) {
    objects.AddObject(3, x, y, "dynamic");
  }
  $scope.scalex = function(x) { return x * scalex; };
  $scope.scaley = function(y) { return y * scaley; }
}

function EmptyController() {
}

controllers.controller('WorkspaceController', ['$scope', 'objects', 'version' , WorkspaceController]);
controllers.controller('WorkspaceController', ['$scope', 'objects', EmptyController]);
controllers.controller('WorkspaceController', ['$scope', 'objects', EmptyController]);


console.log(controllers);
