// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('main', [
	'ionic',
	'pascalprecht.translate',
	'facebookConnect',
	'ngLodash'
])

	.run(function($ionicPlatform) {
		//ngFB.init({appId: '1453157738339194'});  //Match
		//ngFB.init({appId: '1039273636103437'});	//MatchMaker

		//ngFB.revokePermissions();

		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}

			if (window.cordova && window.cordova.platformId == "browser") {
				facebookConnectPlugin.browserInit(1039273636103437, 'v2.4');
				// version is optional. It refers to the version of API you may want to use.
			}

			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleLightContent();
			}
		});
	})

	.config(function($stateProvider, $urlRouterProvider, $translateProvider) {

		$translateProvider.preferredLanguage('en');
		// Ionic uses AngularUI Router which uses the concept of states
		// Learn more here: https://github.com/angular-ui/ui-router
		// Set up the various states which the app can be in.
		// Each state's controller can be found in controllers.js
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
			})
			.state('splash', {
				url: '/splash',
				templateUrl: 'templates/splash.html',
				controller: 'SplashCtrl'
			})
			// setup an abstract state for the tabs directive
			.state('tab', {
				url: '/tab',
				abstract: true,
				templateUrl: 'templates/tabs.html'
			})

			// Each tab has its own nav history stack:
			.state('tab.match', {
				url: '/match',
				views: {
					'tab-match': {
						templateUrl: 'templates/tab-match.html',
						controller: 'MatchCtrl'
					}
				}
			})
			.state('tab.requests', {
				url: '/requests',
				views: {
					'tab-invite': {
						templateUrl: 'templates/tab-requests.html',
						controller: 'RequestsCtrl'
					}
				}
			})
			.state('tab.invite', {
				url: '/invite',
				views: {
					'tab-invite': {
						templateUrl: 'templates/tab-invite.html',
						controller: 'InviteCtrl'
					}
				}
			});


			//.state('tab.chat-detail', {
			//	url: '/chats/:chatId',
			//	views: {
			//		'tab-chats': {
			//			templateUrl: 'templates/chat-detail.html',
			//			controller: 'ChatDetailCtrl'
			//		}
			//	}
			//})
			//
			//.state('tab.account', {
			//	url: '/account',
			//	views: {
			//		'tab-account': {
			//			templateUrl: 'templates/tab-account.html',
			//			controller: 'AccountCtrl'
			//		}
			//	}
			//});

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/login');

	});
