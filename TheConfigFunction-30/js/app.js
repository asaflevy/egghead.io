var myApp = angular.module("myApp", ['ngRoute']);
myApp.controller('AppCtrl', function ($scope) {

});
myApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
      templateUrl: 'app.html',
      controller: 'appCtrl'
    })
})

myApp.controller('appCtrl', function ($scope, $route) {
//  $route.routes['/']  = {
//    templateUrl: 'app.html',
//    controller: 'appCtrl'
//  };
  $scope.model = {
    message: "This is my App !!!"
  }
});