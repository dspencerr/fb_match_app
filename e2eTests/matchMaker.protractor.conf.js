var HtmlReporter = require('protractor-html-screenshot-reporter');

exports.config = {
	directConnect: true,
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['*.spec.js'],
	baseUrl: 'http://localhost:8100/',
	resultJsonOutputFile: 'e2eTests/results.json',
	onPrepare: function() {
		// Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'e2eTests/tmp/screenshots'
		}));
	}
};