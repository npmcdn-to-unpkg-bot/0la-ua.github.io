define(
	'control',
	['jquery'],
	function(model, view){
		var mes = "control module loaded";
		function Control(model, view){
				var self = this;
				view.elements.addBtn.on('click', addItem);
				view.elements.listContent.on('click', '.remove-item', removeItem);

				function addItem() {
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				};

				function removeItem(){
					var el = $(this).attr('data-value');
					model.removeItem(el);
					view.renderList(model.data);


				};
		}




		return {
			mes, Control
		};
	}
);