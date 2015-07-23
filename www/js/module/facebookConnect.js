//Wrapper to the facebook connect plugin
angular.module('facebookConnect', [])
	.factory('fbConnect', function($window, $q) {

		var callApi = function(url, permissions){
			var deferred = $q.defer();
			$window.facebookConnectPlugin.api(url, permissions,
				function(response) {
					if(!response.error){
						deferred.resolve(response);
					} else {
						deferred.reject(response);
					}
				},
				function(response) {
					deferred.reject(response);
				});
			return deferred.promise;
		};

		var invitableFriends = function(){
			return callApi('me/invitable_friends?limit=300', ['user_friends']);
		};

		var friends = function(){
			return callApi('me/friends', ['user_friends']);
		};

		var login = function(permissions) {
			var deferred = $q.defer();
			var options = permissions || ['email'];
			$window.facebookConnectPlugin.login(options,
				function(response) {
					if (response.status === "connected") {
						deferred.resolve(response);
					} else {
						deferred.reject(response);
					}
				},
				function(response) {
					deferred.reject(response);
				});
			return deferred.promise;
		};

		var makeMatch = function(options){
			var deferred = $q.defer();
			options.method = 'apprequests';
			$window.facebookConnectPlugin.showDialog(options,
				function(response) {
					if(!response.error){
						deferred.resolve(response);
					} else {
						deferred.reject(response);
					}
				},
				function(response) {
					deferred.reject(response);
				});
			return deferred.promise;
		};



		return {
			login: login,
			invitableFriends: invitableFriends,
			friends: friends,
			makeMatch: makeMatch
		}

	});


//facebookConnectPlugin.showDialog( { method: "apprequests", message:'the seconds another explicit message for spencer ', to: '1450003375324474', data: '{somemetadata:546}' },
//	function (response) { alert(JSON.stringify(response)) },
//	function (response) { alert(JSON.stringify(response)) });


//var login = function () {
//	if (window.cordova.platformId == "browser") {
//		var appId = prompt("Enter FB Application ID", "");
//		facebookConnectPlugin.browserInit(appId);
//	}
//	facebookConnectPlugin.login( ["email"],
//		function (response) { alert(JSON.stringify(response)) },
//		function (response) { alert(JSON.stringify(response)) });
//}
//
//var showDialog = function () {
//	facebookConnectPlugin.showDialog( { method: "feed" },
//		function (response) { alert(JSON.stringify(response)) },
//		function (response) { alert(JSON.stringify(response)) });
//}


//var getAccessToken = function () {
//	facebookConnectPlugin.getAccessToken(
//		function (response) { alert(JSON.stringify(response)) },
//		function (response) { alert(JSON.stringify(response)) });
//}
//
//var getStatus = function () {
//	facebookConnectPlugin.getLoginStatus(
//		function (response) { alert(JSON.stringify(response)) },
//		function (response) { alert(JSON.stringify(response)) });
//}
//var logout = function () {
//	facebookConnectPlugin.logout(
//		function (response) { alert(JSON.stringify(response)) },
//		function (response) { alert(JSON.stringify(response)) });
//}