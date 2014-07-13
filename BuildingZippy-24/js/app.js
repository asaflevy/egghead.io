var myApp = angular.module("myApp", []);
myApp.controller('AppCtrl',function($scope){

});


myApp.directive('zippy',function(){
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    template: '<div>\n  <h3 ng-click="toggleContent()">{{title}}</h3>\n  <div ng-show="isContentVisible" ng-transclude></div>\n<div>',
    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
})