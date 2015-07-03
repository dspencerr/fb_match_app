describe('settings.controllers cleaningMode', function(){
	var scope;

	// load the controller's module
	beforeEach(module('settings'));

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('CleaningMode', {$scope: scope});
	}));

	// tests start here
	it('should have isCleaningMode defaulted to false', function(){
		expect(scope.isCleaningMode).toEqual(false);
	});
});