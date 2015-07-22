angular.module('main')
	.controller('LoginCtrl', function($scope, $state, fbConnect) {

		$scope.fbLogin = function() {
			fbConnect.login()
				.then(redirectToSplash, loginFailure);
		};

		var redirectToSplash = function() {
			$state.go('splash');
		};

		var loginFailure = function(response) {
			alert(JSON.stringify(response, null, 2));
		};

	});