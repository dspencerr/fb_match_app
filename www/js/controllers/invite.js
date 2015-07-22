angular.module('main')
	.controller('InviteCtrl', function($scope) {

		$scope.friends = [];

		//ngFB.api({
		//	method: 'GET',
		//	path: '/me/taggable_friends'
		//}).then(function(response) {
		//
		//	if (response && !response.error) {
		//		console.log(response);
		//		$scope.friends = response.data;
		//	}
		//}, function() {
		//	alert('An error occurred while sharing this session on Facebook');
		//});




	});