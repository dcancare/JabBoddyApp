// var jabToBodyServices = angular.module('jabToBodyServices', ['ngResource']);

// jabToBodyServices.factory('Post', ['$resource',
// 	function($resource){
// 		return $resource('api/detail/:postId',{}, {
// 			query: {method: 'GET', params:{postId:'posts'}, isArray:true}
// 		})
// 	}])


var jabToBodyServices = angular.module('jabToBodyServices', [])

	// super simple service
	// each function returns a promise object 
	.factory('Post', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/posts');
			},
			create : function(postData) {
				return $http.post('/api/posts', postData);
			},
			delete : function(id) {
				return $http.delete('/api/posts/' + id);
			},
			fetchDetail : function(id) {
				return $http.get('/api/detail/' + id);
			},
			fetchProfile : function(author) {
				return $http.get('/api/profile/' + author);
			},
			validateUser : function() {
				return $http.get('/sessionValidation');
			}

		}
	}]);