define(["jquery","map/updateMap","data"],function($,updateMap,data) {
	return function() {
		var cursor = $("#catpointer");
		$('<div class="swatch"><strong>Categories </strong></div>').appendTo("#buttonbar");
		for(i in data.categories) {
			$(document.createElement("div"))
			.addClass("swatch")
			.attr("value",i)
			.text(i)
			.css("background-color",data.categories[i].color)
			.click(function() {
				global.cat = $(this).attr("value");
				moveCursor($(this));
				updateMap();
			}).appendTo("#buttonbar");
		}
		$(document.createElement("div"))
		.addClass("swatch")
		.attr("value",-1)
		.text("Biggest Issue")
		.css('background-color',data.colorscheme.defaultFill)
		.click(function() {
			global.cat = "Biggest Issue";
			moveCursor($(this));	
			updateMap();
		}).appendTo("#buttonbar");

		cursor.hide();
		moveCursor($(".swatch[value='" + global.cat + "']"));
		setTimeout(function() { cursor.fadeIn(500) },500);

		function moveCursor(obj) {
			cursor.animate({
				top: obj.offset().top - obj.height(),
				left: obj.offset().left + 0.5 * (cursor.width() + obj.width())},500);
		}
	};
});