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
    templateUrl: 'zippy_tpl.html',
    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
})