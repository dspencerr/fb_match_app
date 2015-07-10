describe('experiment detail page', function() {
	it('should show test detail', function() {
		browser.get('#/tab/experiment/5499fb05e4e4c3e1a9af65de');

		var sampleId = element(by.css('.nav-bar-title')).getText();

		expect(sampleId).toEqual('PP, 1:100 G, 60C15s 30');

		expect(sampleId).toEqual('PP, 1:100 G, 60C15s 30');


	});

	describe('nested one level', function(){
		it('should show test detail', function() {
			browser.get('#/tab/experiment/5499fb05e4e4c3e1a9af65de');

			var sampleId = element(by.css('.nav-bar-title')).getText();

			expect(sampleId).toEqual('PP, 1:100 G, 60C15s 30');


			expect(sampleId).toEqual('PP, 1:100 G, 60C15s 30');


		});

		describe('nested 2 levels', function(){
			it('should show test detail', function() {
				browser.get('#/tab/experiment/5499fb05e4e4c3e1a9af65de');

				var sampleId = element(by.css('.nav-bar-title')).getText();



				expect(sampleId).toEqual('PP, 1:100 G, 60C15s 30');

				expect(sampleId).toEqual('PP, 1:100 G, 60C15s 301');

			});
		});
	});


});



//element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//element(by.css('.nav-bar-title')).click();
//
//var todoList = element.all(by.repeater('todo in todoList.todos'));
//expect(todoList.count()).toEqual(3);
//expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//// You wrote your first test, cross it off the list
//todoList.get(2).element(by.css('input')).click();
//var completedAmount = element.all(by.css('.done-true'));
//expect(completedAmount.count()).toEqual(2);