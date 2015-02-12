define(["controller/drawCategories","controller/drawTimeBar"],function(drawCategories,drawTimeBar) {
	return function() {
		drawCategories();
		drawTimeBar();
	};
});