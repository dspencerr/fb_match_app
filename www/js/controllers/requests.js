angular.module('main')
	.controller('RequestsCtrl', function($scope, fbConnect) {

		$scope.log = function(msg) {
			console.log(msg);
		};

		$scope.requests = [];

		var loadRequests = function(response) {
			$scope.requests = response.data;
		};

		var loadRequestsFailed = function(response) {
			alert(JSON.stringify(response, null, 2));
		};

		fbConnect.appRequests()
			.then(loadRequests, loadRequestsFailed);


	});