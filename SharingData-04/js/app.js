var myApp = angular.module('myApp',[])

myApp.factory('Data',function(){
  return {message: 'message from a service'}
})

function FirstCtrl($scope,Data) {
  $scope.data = Data;
}

function SecondCtrl($scope,Data) {
  $scope.data = Data;
}