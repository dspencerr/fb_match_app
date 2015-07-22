angular.module('main')
	.controller('MatchChooserCtrl', function($scope, fbConnect) {

		$scope.friends = [];

		$scope.selectFriend = function(friend) {
			$scope.$parent.selectedFriend = friend;
		};

		var loadFriends = function(response) {
			$scope.friends = response.data;
		};

		var loadFriendsFailed = function(response) {
			alert(JSON.stringify(response, null, 2));
		};

		fbConnect.friends()
			.then(loadFriends, loadFriendsFailed);


	});