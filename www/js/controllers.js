var m = angular.module('starter.controllers', ['ngOpenFB']);

m.controller('SplashCtrl', function($scope) {
});

m.controller('ChatsCtrl', function($scope, Chats) {
	// With the new view caching in Ionic, Controllers are only called
	// when they are recreated or on app start, instead of every page change.
	// To listen for when this page is active (for example, to refresh data),
	// listen for the $ionicView.enter event:
	//
	//$scope.$on('$ionicView.enter', function(e) {
	//});

	$scope.chats = Chats.all();
	$scope.remove = function(chat) {
		Chats.remove(chat);
	}
});

m.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
	$scope.chat = Chats.get($stateParams.chatId);
});

m.controller('AccountCtrl', function($scope, ngFB) {
	$scope.settings = {
		enableFriends: true
	};

	$scope.message = 'Just chillin\'';


	$scope.fbLogin = function() {
		ngFB.login({scope: 'publish_actions,user_friends'}).then(
			function(response) {
				if (response.status === 'connected') {
					console.log('Facebook login succeeded');
					$scope.closeLogin();
				} else {
					alert('Facebook login failed');
				}
			});
	};

	ngFB.api({
		path: '/me',
		params: {fields: 'id,name'}
	}).then(function(user) {
		$scope.user = user;
	}, function(error) {
		alert('Facebook error: ' + error.error_description);
	});


	$scope.share = function(event) {
		ngFB.api({
			method: 'POST',
			path: '/me/feed',
			params: {
				message: $scope.message
			}
		}).then(function() {
			alert('The session was shared on Facebook');
		}, function() {
			alert('An error occurred while sharing this session on Facebook');
		});
	};

	$scope.friends = [];
	$scope.getFriends = function(event) {

		ngFB.api({
			path: '/me/permissions'
		}).then(function(response) {
			console.log(response)
		}, function(error) {
			alert('Facebook error: ' + error.error_description);
		});


		ngFB.api({
			method: 'GET',
			path: '/me/taggable_friends'
		}).then(function(response) {

			if (response && !response.error) {
				console.log(response);
				$scope.friends = response.data;
			}
		}, function() {
			alert('An error occurred while sharing this session on Facebook');
		});
	};


});
