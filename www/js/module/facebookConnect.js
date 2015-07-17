//Wrapper to the facebook connect plugin
angular.module('facebookConnect')
	.factory('fbConnect', function($window, $q) {

		function login(permissions) {
			var deferred = $q.defer();
			$window.facebookConnectPlugin.login(function(result) {
				if (result.status === "connected") {
					deferred.resolve(result);
				} else {
					deferred.reject(result);
				}
			}, options);
			return deferred.promise;
		}




		return {

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
//
//var apiTest = function () {
//	facebookConnectPlugin.api( "me/?fields=id,email", ["user_birthday"],
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