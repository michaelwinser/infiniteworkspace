'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);

console.log("myApp", myApp);
myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/workspace', {templateUrl: 'partials/workspace.html', controller: WorkspaceController});
    $routeProvider.otherwise({redirectTo: '/workspace'});
  }]);
