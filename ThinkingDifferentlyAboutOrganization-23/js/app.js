var myApp = angular.module("myApp", []);

var controllers = {};
var directives = {};
controllers.AppCtrl = function($scope){

  this.sayHi= function(){
    alert('hi');
  };
  return $scope.AppCtrl = this;
};

myApp.controller(controllers);

directives.panel  = function(){
  return {
    restrict : 'E',
    template:'<div class="panel"></div>'
  }
}

myApp.directive(directives)