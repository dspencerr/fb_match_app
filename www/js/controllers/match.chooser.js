angular.module('main')
	.controller('MatchChooserCtrl', function($scope) {

		$scope.selectFriend = function(friend) {
			$scope.$parent.selectedFriend = friend;
		};


	});