angular.module('main')
	.controller('MatchSenderCtrl', function($scope, ngFB, lodash) {

		$scope.invitableFriends = [];

		$scope.targetFriend = {};
		$scope.selectTargetFriend = function(friend) {
			$scope.targetFriend = friend;
			$scope.buildPersonalMessage();
		};
		$scope.deselectTargetFriend = function(friend) {
			$scope.targetFriend = {};
		};


		//$scope.targetFriends = [];
		//$scope.selectTargetFriend = function(friend){
		//	$scope.targetFriends = lodash.union($scope.targetFriends, [friend]);
		//	$scope.invitableFriends.splice(lodash.indexOf($scope.invitableFriends, friend), 1);
		//};
		//$scope.deselectTargetFriend = function(friend){
		//	$scope.invitableFriends = lodash.union($scope.invitableFriends, [friend]);
		//	$scope.targetFriends = lodash.without($scope.targetFriends, friend);
		//};

		$scope.goBack = function() {
			$scope.deselectTargetFriend();
			$scope.deselectFriend();
		};

		ngFB.api({
			method: 'GET',
			path: '/me/invitable_friends'
		}).then(function(response) {
			if (response && !response.error) {
				$scope.invitableFriends = response.data;
			}
		}, function() {
			alert('An error occurred while loading this session on Facebook');
		});


		$scope.personalMessage = 'Hey [name], I found someone for you to take out on a date. Check them out, and if you like them, I\'ll make an introduction.';
		$scope.personalMessage += '\nMessage me if you have any questions about them.';
		$scope.buildPersonalMessage = function() {
			//{{ targetFriend.name.split(\' \')[0] }}

			$scope.personalMessage = $scope.personalMessage.replace(/\[name\]/, $scope.targetFriend.name.split(' ')[0]);
		};


		$scope.sendRequest = function() {

			var message = $scope.personalMessage + '\n' + '<a href="https://www.facebook.com/' + $scope.selectedFriend.id + '">' + $scope.selectedFriend.name + '</a>';
			var ids = [];

			ids.push($scope.targetFriend.id);

			ngFB.api({
				method: 'POST',
				path: '/me/apprequests',
				params: {
					message: message,
					ids: ids,
					action_type: 'INVITE'
				}
			}).then(function(response) {
				alert('message sent');
			}, function(error) {


				alert('An error occurred while loading this session on Facebook');
			});

		}

	});