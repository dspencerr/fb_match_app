angular.module('main')
	.controller('LoginCtrl', function($scope, $state, ngFB) {

		var login = function () {

			facebookConnectPlugin.login( ["email","user_friends"],
				loginSuccessful,
				function (response) { alert(JSON.stringify(response)) });
		};


		//$scope.fbLogin = function() {
		//	ngFB.login({scope: 'user_friends'}).then(loginSuccessful);
		//};

		$scope.fbLogin = login;

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