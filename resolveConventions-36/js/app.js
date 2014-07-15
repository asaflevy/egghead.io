var myApp = angular.module("myApp", ['ngRoute']);
myApp.controller('AppCtrl', function ($scope) {

});
myApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app.html',
    controller: 'appCtrl',
    resolve : {
      loadData : appCtrl.loadData,
      prepData : appCtrl.prepData
    }
  })
})

var appCtrl = myApp.controller('appCtrl', function ($scope, $route) {
  console.log($route)
  console.log($route.current.locals)
  $scope.model = {
    message: 'hello To My App !!!'
  }

});

appCtrl.loadData = function($q,$timeout){
  var defer = $q.defer();
  $timeout(function(){
    defer.resolve('load Data');
    //console.log('load data');
  },4000)
  return defer.promise
}
appCtrl.prepData = function($q,$timeout){
  var defer = $q.defer()
  $timeout(function(){
    defer.resolve('prepData');
    //console.log('prep data');
  },2000)
};