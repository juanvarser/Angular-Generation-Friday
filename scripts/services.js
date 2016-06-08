(function(){
  angular.module('myApp.services',['ngResource'])
  .constant('BaseUrl', 'http://jsonplaceholder.typicode.com/')
  .factory('Post', Post);

  function Post($resource,BaseUrl){
    return $resource(BaseUrl + 'posts/:id', {id: '@id'})
  };
  
})();
