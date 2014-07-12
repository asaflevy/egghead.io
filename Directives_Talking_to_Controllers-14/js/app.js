var myApp = angular.module('twitterApp',[])

myApp.controller('TwitterCtrl',function($scope){
  $scope.loadMoreTweets = function(){
    console.log('loading More Tweets !!!')
  }

  $scope.deleteTweets = function(){
    console.log('deleting Tweets !!!')
  }
});

myApp.directive('enter',function(){
  return function(scope,element,attr){
    element.bind("mouseenter", function() {
//      scope.loadMoreTweets();
      scope.$apply(attr.enter)
      element.addClass('panel');
    });
  }
})






