define(
	'view',
	['jquery', 'pattern'],
	function(model){
		var mes = "view module loaded";
		function View(model){
				var self = this;

				function init() {
					var tmpl_content = tmpl( $('#tmpl-list').html() ); 
					$('body').append( tmpl_content );
					self.elements = {
						input : $('.block--ToDo__add>input'),
						addBtn: $('.block--ToDo__add>button'),
						listContent: $('.block--ToDo__items')
					}
					self.renderList(model.data);
				};

				self.renderList = function (data){
					var list_el = tmpl($('#list-form').html(), {data:data});
					self.elements.listContent.html(list_el);

				};


				init();

		};

		return {
			mes, View
		};
	}
);