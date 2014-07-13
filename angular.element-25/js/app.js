var myApp = angular.module("myApp", []);

myApp.directive("dumbPassword", function() {
  var validElement = angular.element("<div>{{model.input}}</div>");

  //in the video, I accidentally typed "this.link". "this" in a directive is "Window". Instead, use "var link" as shown below.
  var link = function(scope) {
    scope.$watch("model.input", function(value) {
      if (value === "password") {
        validElement.toggleClass("alert-box alert");
      }else{
        validElement.removeClass("alert-box alert");
      }
    })
  }

  return {
    restrict: "E",
    replace: true,
    template: "<div>\n  <input type=\"text\" ng-model=\"model.input\">\n  \n  \n<div>",
    compile: function(tElem) {
      tElem.append(validElement);
      return link;
    }
  }
})