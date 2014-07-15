var myApp = angular.module("myApp", ['ngRoute']);
myApp.controller('AppCtrl', function ($scope) {

});
myApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app.html',
    controller: 'appCtrl',
    resolve : {
      myApp : function($q,$timeout){
        var defer = $q.defer();
        $timeout(function(){
          defer.resolve();
        },4000)
        return defer.promise
      }
    }
  })
})

myApp.controller('appCtrl', function ($scope, $q) {
  var defer = $q.defer();
  defer.promise
    .then(function(weapon){alert('I Promised I would show up :1 ' +  weapon)})

  $scope.model = {
    message: 'hello To My App !!!'
  }

  defer.resolve('sword');
});