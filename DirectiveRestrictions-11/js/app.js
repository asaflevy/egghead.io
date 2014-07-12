var myApp = angular.module('superHero',[])

myApp.directive('superman',function(){
  return {
//    restrict :'A',
//    link : function(){
//      alert('I am superman')
//    }
    restrict :'C',
    link : function(){
      alert('I am superman')
    }
  }
})


myApp.directive('flash',function(){
  return {
    restrict :'A',
    link : function(){
      alert('I am flash')
    }
  }
})




