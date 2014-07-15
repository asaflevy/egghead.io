var myApp = angular.module("myApp", ['ngRoute']);
myApp.controller('AppCtrl', function ($scope) {

});
myApp.config(function ($routeProvider) {
  $routeProvider.when('/:name/:lastname', {
    templateUrl: 'app.html',
    controller: 'appCtrl'
  })
})

myApp.controller('appCtrl', function ($scope, $routeParams) {
  $scope.model = {
    message: 'hello ' +  $routeParams.name + ', '+  $routeParams.lastname
  }
});