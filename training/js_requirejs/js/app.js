requirejs.config({
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery',
		'pattern': 'templates'
		},
		shim: {
			'jquery': {
				exports: 'jQuery'
			},
			'pattern': {
				exports: 'tmpl'
			}
		}
	
	});
require(
	[
		'jquery',
		'pattern',
		'datas',
		'view',
		'control'
	],
	function($, pattern, datas, view, control){
		console.log(datas.mes);
		console.log(view.mes);
		console.log(control.mes);
		//console.log(pattern);
		var firstList = ['read Jonathan Livingston Seagull', 'visit dentist', 'learn AngularJS'];
		var model1 = new datas.Model(firstList);
		var view1 = new view.View(model1);
		var control1 = new control.Control(model1, view1);

	}
);
