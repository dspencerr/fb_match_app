angular.module('main')
	.controller('LoginCtrl', function($scope, $state, ngFB) {

		$scope.fbLogin = function() {
			ngFB.login({scope: 'user_friends'}).then(loginSuccessful);
		};

		var redirectToSplash = function() {
			$state.go('splash');
		};

		var loginSuccessful = function(response) {
			if (response.status === 'connected') {
				redirectToSplash();

			} else {
				alert('Facebook login failed');
			}
		};

	});