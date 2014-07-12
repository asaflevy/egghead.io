var myApp = angular.module('behaviorApp',[])

//myApp.directive('enter',function(){
//  return {
//    restrict:'A',
//    link : function(scope,element){
//      element.bind("mouseenter", function() {
//        element.addClass('panel');
//      })
//    }
//  }
//})

myApp.directive('enter',function(){
  return function(scope,element,attr){
    element.bind("mouseenter", function() {
      element.addClass(attr.enter);
    });
  }
})

myApp.directive('leave',function(){
  return function(scope,element,attr){
    element.bind('mouseleave',function(){
      element.toggleClass(attr.enter);
    })
  }
});






