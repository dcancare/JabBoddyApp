var jabToBodyApp = angular.module('jabToBodyApp',
	['ngRoute','jabToBodyControllers','jabToBodyServices']);

jabToBodyApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		 when('/jab', {
		 	templateUrl: 'jabToTheBody.html',
		 	controller: 'MainController'
		 }).
		 when('/postDetails/:postId', {
		 	templateUrl: 'postDetails.html',
		 	controller: 'PostDetailsController'
		 }).
		 when('/olderPosts', {
		 	templateUrl: 'olderPosts.html',
		 	controller: 'OlderPostsController'
		 }).
		 otherwise({
		 	redirectTo: '/jab'
		 });
	}]);