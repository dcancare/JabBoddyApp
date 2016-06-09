var jabToBodyControllers = angular.module('jabToBodyControllers', []);

jabToBodyControllers.controller('MainController', ['$scope','$http', function($scope,$http){
  $http.get('/api/posts').success(function(data) {
  $scope.posts = data;
  })
}]);

// jabToBodyControllers.controller('PostDetailsController', ['$scope','$routeParams', 'Post', function($scope,$routeParams,Post){
//   $scope.post = Post.get({postId: $routeParams.postId}, function(post) {
//   })
// }]);

jabToBodyControllers.controller('PostDetailsController', ['$scope','$http', 'Post', function($scope,$http,Post){
   Post.fetchDetail('1').success(function(data) {
   $scope.post = data;
   })
}]);

jabToBodyControllers.controller('OlderPostsController', ['$scope','$http', function($scope,$http){
  $http.get('/api/posts').success(function(data) {
  $scope.posts = data;
  })
}]);



