var Directives = (function(undefined){

  _postDirective = function(){
    return{
      restrict: "E",
      templateUrl: "./views/post-directive.html"
    }
  };

  _headerDirective = function(){
    return{
      restrict: "A",
      scope: {},
      templateUrl:"./views/header.html"
    }
  };

  _footerDirective = function(){
    return{
      restrict: "A",
      scope: {},
      templateUrl: "./views/footer.html"
    }
  };

  return{
    postDirective: _postDirective,
    headerDirective: _headerDirective,
    footerDirective: _footerDirective
  };

})();

(function(){
  angular.module('myApp.directives',[])
  .directive('postDirective',Directives.postDirective)
  .directive('headerDirective', Directives.headerDirective)
  .directive('footerDirective', Directives.footerDirective)
})();
