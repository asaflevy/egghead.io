var phoneApp = angular.module("phoneApp", []);

phoneApp.controller("phoneCtrl", function ($scope) {
  $scope.callHome  = function(message){
    alert('calling Home !!!' + message)
  }
})


phoneApp.directive("phone", function() {
  return {
    scope: {
      dailhome: "&"
    },
    template: "<input type='text' ng-model='value'/>" +
      "<div class='button' ng-click='dailhome({message:value})'>Call Home !!!</div>"
  }
})
