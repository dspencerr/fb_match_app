angular.module('main')
	.controller('MatchChooserCtrl', function($scope, ngFB, lodash) {

		$scope.friends = [];

		$scope.selectFriend = function(friend) {
			$scope.$parent.selectedFriend = friend;
		};

		ngFB.api({
			method: 'GET',
			path: '/me/friends'
		}).then(function(response) {

			if (response && !response.error) {
				$scope.friends = response.data;
			}
		}, function() {
			alert('An error occurred while loading this session on Facebook');
		});


	});