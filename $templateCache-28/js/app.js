var myApp = angular.module("myApp", []);
myApp.controller('AppCtrl',function($scope){

});

myApp.run(function($templateCache){
  $templateCache.put('zippy_tpl','  <div> <h3 ng-click="toggleContent()">{{title}}</h3><div ng-show="isContentVisible" ng-transclude></div><div>');
  //$templateCache.info();
})


myApp.directive('zippy',function($templateCache){
  console.log($templateCache.get('zippy_tpl'))
  return {
    restrict: "E",
    transclude: true,
    scope: {
      title: "@"
    },
    templateUrl: 'zippy_tpl',
    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
      }
    }
  }
})