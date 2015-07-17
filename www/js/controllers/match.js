angular.module('main')
	.controller('MatchCtrl', function($scope, ngFB) {

		$scope.log = function(msg) {
			console.log(msg);
		};

		$scope.selectedFriend = {};
		$scope.deselectFriend = function() {
			$scope.selectedFriend = {};
		};


		$scope.currentUser = {};

		ngFB.api({path: '/me'})
			.then(function(res) {
				angular.extend($scope.currentUser, res);
			}, function(err) {
				// error
			});


	});