var myApp = angular.module("myApp", ['ngRoute']);
myApp.controller('AppCtrl', function ($scope) {

});
myApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app.html',
    controller: 'appCtrl'
  })
})

myApp.controller('appCtrl', function ($scope, $q) {
  var defer = $q.defer();
  defer.promise
    .then(function(weapon){alert('I Promised I would show up :1 ' +  weapon)})
    .then(console.log('I Promised I would show up :2'))
  $scope.model = {
    message: 'hello To My App !!!'
  }

  defer.resolve('sword');
});