var myApp = angular.module("myApp", []);

myApp.controller("FlavorCtrl", function ($scope) {
  $scope.ctrlFlavor = 'apple';
})


myApp.directive("drink", function() {
  return {
    scope: {
      flavorbind: "="
    },
    template: '<input type="text" ng-model="flavorbind">'
  }
})
