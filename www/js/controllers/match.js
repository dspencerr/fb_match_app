angular.module('main')
	.controller('MatchCtrl', function($scope, ngFB, lodash) {


		$scope.getMorePermissions = function() {
			console.log('asking for more permissions');
			ngFB.login({scope: 'publish_actions,user_friends'}).then(permissionSuccessful);
		};

		var permissionSuccessful = function() {
			console.log('We now can post.');
		};

		$scope.log = function(msg) {
			console.log(msg);
		};

		$scope.friends = [];
		$scope.selectedFriends = [];

		$scope.selectFriend = function(friend) {
			$scope.selectedFriends = lodash.union($scope.selectedFriends, [friend]);
			$scope.friends.splice(lodash.indexOf($scope.friends, friend), 1);
		};
		$scope.deselectFriend = function(friend) {
			$scope.friends = lodash.union($scope.friends, [friend]);
			$scope.selectedFriends = lodash.without($scope.selectedFriends, friend);
		};

		ngFB.api({
			method: 'GET',
			path: '/me/taggable_friends'
		}).then(function(response) {

			if (response && !response.error) {
				$scope.friends = response.data;
			}
		}, function() {
			alert('An error occurred while loading this session on Facebook');
		});


	});