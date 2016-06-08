function indexController(Post){
  this.posts;
  var self = this;
  Post.query().$promise.then(function(response){
    self.posts = response;
  });
};

function postController($routeParams,Post){
    this.post;
    var self = this;
    Post.get({id: $routeParams.id}).$promise.then(function(response){
      self.post = response;
    })
};

(function(){
  angular.module('myApp.controllers',['myApp.services'])
  .controller('indexController',indexController)
  .controller('postController', postController)

})();
