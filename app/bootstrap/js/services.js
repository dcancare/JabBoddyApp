var jabToBodyServices = angular.module('jabToBodyServices', ['ngResource']);

jabToBodyServices.factory('Post', ['$resource',
	function($resource){
		return $resource('posts/:postId.json',{}, {
			query: {method: 'GET', params:{postId:'posts'}, isArray:true}
		})
	}])