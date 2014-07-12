var myApp = angular.module("myApp", []);

myApp.directive('panel',function(){
  return {
    restrict:'E',
    transclude:true,
    template:'<div class="panel " ng-transclude> Just a div Div with panel class</div>'
  }
})
