angular.module('main')
	.controller('MatchCtrl', function($scope, fbConnect) {

		$scope.log = function(msg) {
			console.log(msg);
		};

		$scope.selectedFriend = {};
		$scope.deselectFriend = function() {
			$scope.selectedFriend = {};
		};

		$scope.friends = [];

		var loadFriends = function(response) {
			$scope.friends = response.data;
		};

		var loadFriendsFailed = function(response) {
			alert(JSON.stringify(response, null, 2));
		};

		fbConnect.friends()
			.then(loadFriends, loadFriendsFailed);

		$scope.currentUser = {};


	})
	.filter('withoutSelected', function() {
		return function(friends, selectedFriend) {
			var filtered = [];
			angular.forEach(friends, function(friend) {
				if (friend !== selectedFriend) {
					filtered.push(friend);
				}
			});
			return filtered;
		};
	});