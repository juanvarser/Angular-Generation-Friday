function setConfig($locationProvider,$routeProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when('/',{
    controller:'indexController',
    templateUrl:'views/index.html',
    controllerAs:'index'
  })
  .when('/posts/:id',{
    controller: 'postController',
    templateUrl: 'views/show.html',
    controllerAs: 'post'
  })
};

(function(){
  angular.module('myApp', ['ngRoute','myApp.controllers','myApp.directives'])
  .config(['$locationProvider','$routeProvider', setConfig])
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
  });
})();
