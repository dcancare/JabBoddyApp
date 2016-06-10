var jabToBodyControllers = angular.module('jabToBodyControllers', []);

jabToBodyControllers.controller('MainController', ['$scope','$http', 'Post', function($scope,$http,Post){
  //$http.get('/api/posts').success(function(data){ // can use this or the one thats getting used below 
  Post.get().success(function(data) {
  $scope.posts = data;
  })
}]);

// jabToBodyControllers.controller('PostDetailsController', ['$scope','$routeParams', 'Post', function($scope,$routeParams,Post){
//   $scope.post = Post.get({postId: $routeParams.postId}, function(post) {
//   })
// }]);

jabToBodyControllers.controller('PostDetailsController', ['$scope','$http', '$routeParams', 'Post', function($scope,$http,$routeParams,Post){
   var parameterPostId = $routeParams.postId;
   Post.fetchDetail(parameterPostId).success(function(data) {
   $scope.post = data[0];
   })
}]);

jabToBodyControllers.controller('OlderPostsController', ['$scope','$http', function($scope,$http){
  $http.get('/api/posts').success(function(data) {
  $scope.posts = data;
  })
}]);

jabToBodyControllers.controller('CreatePostController', ['$scope','$http', 'Post', function($scope,$http,Post){

	$scope.addPost = function(){
			Post.create($scope.post).success(function(data) {
						$scope.posts = data; // assign our new list of posts ///////this wont work 
					});
	}
}]);

jabToBodyControllers.controller('EditorController', ['$scope','$http', 'Post', function($scope,$http,Post){
  //$http.get('/api/posts').success(function(data){ // can use this or the one thats getting used below 
  Post.get().success(function(data) {
  $scope.posts = data;
  })
}]);

