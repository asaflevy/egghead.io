var myApp = angular.module("myApp", []);

//myApp.controller('MyCtrl',function($scope,$http){
//  console.log($scope)
//  //console.log($http)
//});

myApp.controller('MyCtrl',['$scope','$http',function($scope,$http){
  console.log($scope)
  console.log($http)
}]);

myApp.directive("myDirective", function() {
  return{
    restrict : 'A',
    //scope : {},
    link : function(scope,element,attrs){
      console.log(scope);
    }
  }
})