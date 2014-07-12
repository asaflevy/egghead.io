var myApp = angular.module("myApp", []);

myApp.controller("FlavorCtrl", function ($scope) {
  $scope.ctrlFlavor = 'apple';
})


myApp.directive('drink', function () {
  return {
    scope: {
      flavor: '@'
    },
    template: '<div>{{flavor}}</div>'
//    link : function(scope,element,attr){
//      scope.flavor = attr.flavor;
//    }
  }
})


