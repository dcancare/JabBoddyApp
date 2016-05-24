var jabToBodyControllers = angular.module('jabToBodyControllers', []);

jabToBodyControllers.controller('MainController', ['$scope','$http', function($scope,$http){
  $http.get('posts/posts.json').success(function(data) {
  $scope.posts = data;
  })
}]);

jabToBodyControllers.controller('PostDetailsController', ['$scope','$routeParams', 'Post', function($scope,$routeParams,Post){
  $scope.post = Post.get({postId: $routeParams.postId}, function(post) {
  })
}]);

jabToBodyControllers.controller('OlderPostsController', ['$scope','$http', function($scope,$http){
  $http.get('posts/posts.json').success(function(data) {
  $scope.posts = data;
  })
}]);



