var myApp = angular.module('behaviorApp',[])

myApp.directive('enter',function(){
  return {
    restrict:'A',
    link : function(scope,element){
      element.bind("mouseenter", function() {
        console.log("I'm inside of you!");
      })
    }
  }
})

myApp.directive('leave',function(){
  return function(scope,element){
    element.bind("mouseleave", function() {
      console.log("mouse leave the element !!!");
    });
  }
})

//myApp.directive('enter',function(){
//  return function(scope,element){
//    element.bind("mouseenter", function() {
//      console.log("I'm inside of you!");
//    });
//  }
//})





