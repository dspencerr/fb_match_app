describe('main.services', function(){
	var Experiments;
	beforeEach(module('main.services'));

	//beforeEach(inject(function (_Experiments_) {
	//	MainServices = _Experiments_;
	//}));

	it('can get an instance of my factory', inject(function(ExperimentsFactory) {
		expect(ExperimentsFactory).toBeDefined();
	}));

	//it('has 5 chats', inject(function(Friends) {
	//	expect(Friends.all().length).toEqual(5);
	//}));
	//
	//it('has Max as friend with id 1', inject(function(Friends) {
	//	var oneFriend = {
	//		id: 1,
	//		name: 'Max Lynx',
	//		notes: 'Odd obsession with everything',
	//		face: 'https://avatars3.githubusercontent.com/u/11214?v=3&amp;s=460'
	//	};
	//
	//	expect(Friends.get(1).name).toEqual(oneFriend.name);
	//}));
});