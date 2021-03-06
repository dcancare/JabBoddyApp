var jabToBodyControllers = angular.module('jabToBodyControllers', []);

jabToBodyControllers.controller('MainController', ['$scope','$http','$rootScope', 'Post', function($scope,$http,$rootScope,Post){
  //$http.get('/api/posts').success(function(data){ // can use this or the one thats getting used below 
  Post.get().success(function(data) {
  $scope.posts = data;
  })
  Post.validateUser().success(function(data) {
    $rootScope.userSession = data;
    //$rootScope.userSession = true;  
  })
}]);

// jabToBodyControllers.controller('PostDetailsController', ['$scope','$routeParams', 'Post', function($scope,$routeParams,Post){
//   $scope.post = Post.get({postId: $routeParams.postId}, function(post) {
//   })
// }]);

jabToBodyControllers.controller('PostDetailsController', ['$scope','$http','$routeParams', '$rootScope', 'Post', function($scope,$http,$routeParams,$rootScope,Post){
   $scope.editMode = false;

   var parameterPostId = $routeParams.postId;
   Post.fetchDetail(parameterPostId).success(function(data) {
    $scope.post = data[0];
   });

   $scope.updatePost = function(id){
    console.log($scope.post);
     Post.postUpdate($scope.post).success(function(data) {
      //$scope.post = data[0];
     });
   }

   $scope.editModeCheck = function(){
    if($scope.editMode)
      {
        $scope.editMode = false;
      }
      else
      {
        $scope.editMode = true;
      }
   }
     
  $scope.showEditButton = function() {
     return (!$scope.editMode  && $rootScope.userSession)
 }

  $scope.showSubmitCancel = function() {
     return ($scope.editMode  && $rootScope.userSession)
 }

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
        questionArray : [{}],
        date : new Date()
  };
 //$scope.questionArray = [{question :'', answer :''}]; 
 $scope.newItem = function($event){                                                  
        $scope.post.questionArray.push({});
        $event.preventDefault();
    }
  $scope.addPost = function(){
			Post.create($scope.post).success(function(data) {
						//$scope.posts = data; // assign our new list of posts ///////this wont work 
					});
	}
}]);

jabToBodyControllers.controller('EditorController', ['$scope','$http', '$routeParams', 'Post', function($scope,$http,$routeParams,Post){
  var parameterAuthor = $routeParams.author;
  Post.fetchProfile(parameterAuthor).success(function(data) {
  $scope.profileData = data[0];
  })
}]);
