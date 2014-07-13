var myApp = angular.module("myApp", []);

myApp.controller('AppCtrl',function($scope){
//  $scope.sayHi= function(){
//    alert('hi');
//  }

  this.sayHi= function(){
    alert('hi');
  };
  return $scope.AppCtrl = this;
})