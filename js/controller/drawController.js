define(["jquery","controller/drawCategories","controller/drawTimeBar"],function($,drawCategories,drawTimeBar) {
	return function() {
		$(document.createElement("div"))
		.attr("id","catpointer")
		.addClass("pointer floater")
		.appendTo("body");

		drawCategories();
		drawTimeBar();
	};
});