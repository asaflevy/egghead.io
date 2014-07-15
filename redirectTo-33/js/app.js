var myApp = angular.module("myApp", ['ngRoute']);
myApp.controller('AppCtrl', function ($scope) {

});
myApp.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app.html',
    controller: 'appCtrl'
  }).when('/pizza/:crust/:toppings', {
    redirectTo: function(routeParams, path, search) {
      console.log(routeParams)
      console.log(path)
      console.log(search)
      return "/" + routeParams.crust
    }
  })
    .when('/deep', {
      template: 'Deep dish'
    })
    .otherwise({
      redirectTo: "/"
    })
})

myApp.controller('appCtrl', function ($scope, $routeParams) {
  $scope.model = {
    message: 'hello To My App !!!'
  }
});