var jabToBodyControllers = angular.module('jabToBodyControllers', []);

jabToBodyControllers.controller('MainController', ['$scope','$http','$rootScope', 'Post', function($scope,$http,$rootScope,Post){
  //$http.get('/api/posts').success(function(data){ // can use this or the one thats getting used below 
  Post.get().success(function(data) {
  $scope.posts = data;
  })
  Post.validateUser().success(function(data) {
  //$rootScope.userSession = data;
    $rootScope.userSession = false;
  
  console.log("User logged in: " + $rootScope.userSession);

  })
}]);

// jabToBodyControllers.controller('PostDetailsController', ['$scope','$routeParams', 'Post', function($scope,$routeParams,Post){
//   $scope.post = Post.get({postId: $routeParams.postId}, function(post) {
//   })
// }]);

jabToBodyControllers.controller('PostDetailsController', ['$scope','$http','$routeParams', 'Post', function($scope,$http,$routeParams,Post){
   var parameterPostId = $routeParams.postId;
   Post.fetchDetail(parameterPostId).success(function(data) {
    $scope.post = data[0];
    console.log($scope.post)
   })
}]);

jabToBodyControllers.controller('OlderPostsController', ['$scope','$http', '$rootScope','Post', function($scope,$http,$rootScope,Post){
   $scope.deletePost = function(id){
      Post.delete(id).success(function(data) {
        $scope.posts = data;
      });
   }
   
  $http.get('/api/posts').success(function(data) {
  $scope.posts = data;
  })
}]);

jabToBodyControllers.controller('CreatePostController', ['$scope','$http', 'Post', function($scope,$http,Post){
  $scope.post = {
        questionArray : [{}]
  };
 //$scope.questionArray = [{question :'', answer :''}]; 
 $scope.newItem = function($event){                                                  
        $scope.post.questionArray.push({});
        $event.preventDefault();
    }
  $scope.addPost = function(){
		console.log("Adding post");

			Post.create($scope.post).success(function(data) {
						$scope.posts = data; // assign our new list of posts ///////this wont work 
					});
	}
}]);

jabToBodyControllers.controller('EditorController', ['$scope','$http', '$routeParams', 'Post', function($scope,$http,$routeParams,Post){
  var parameterAuthor = $routeParams.author;
  Post.fetchProfile(parameterAuthor).success(function(data) {
  $scope.profileData = data[0];
  })
}]);
