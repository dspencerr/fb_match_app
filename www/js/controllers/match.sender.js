angular.module('main')
	.controller('MatchSenderCtrl', function($scope, $translate, $ionicScrollDelegate,$ionicListDelegate, fbConnect) {

		$scope.invitableFriends = [];

		$scope.targetFriend = {};
		$scope.selectTargetFriend = function(friend) {
			$scope.targetFriend = friend;
			buildPersonalMessage();
			sendRequest();
			$ionicScrollDelegate.scrollTop();
		};
		$scope.deselectTargetFriend = function(friend) {
			$scope.targetFriend = {};
		};

		$scope.goBack = function() {
			$scope.deselectTargetFriend();
			$scope.deselectFriend();
		};

		var buildPersonalMessage = function() {
			$scope.personalMessage = $scope.targetFriend.name.split(' ')[0];
			$scope.personalMessage += ' - ';
			$scope.personalMessage += $scope.translatedMessage;
		};

		//Small chance that this doesn't finish in time?
		$translate('makeMatchMessage').then(function(translation) {
			$scope.translatedMessage = translation;
		});


		var sendRequest = function() {
			var options = {
				message: $scope.personalMessage,
				to: $scope.targetFriend.id,
				data: {
					dateSent: new Date(),
					suggestedId: $scope.selectedFriend.id
				}
			};

			fbConnect.makeMatch(options)
				.then(matchSent, matchFailed);

			$ionicListDelegate.closeOptionButtons(); //this will close any open button from swiping left

		};

		var matchSent = function(response) {
			alert(JSON.stringify(response, null, 2));
			$scope.goBack();
		};

		var matchFailed = function(response) {
			alert(JSON.stringify(response, null, 2));
		};


		var loadFriends = function(response) {
			$scope.invitableFriends = response.data;
		};

		var loadFriendsFailed = function(response) {
			alert(JSON.stringify(response, null, 2));
		};

		setTimeout(function () {
			fbConnect.invitableFriends()
				.then(loadFriends, loadFriendsFailed);
		}, 1000);


	});