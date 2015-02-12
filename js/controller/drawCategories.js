define(["jquery","map/updateMap","data"],function($,updateMap,data) {
	return function() {
		$('<div class="swatch"><strong>Categories </strong></div>').appendTo("#buttonbar");
		for(i in data.categories) {
			$(document.createElement("div"))
			.addClass("swatch")
			.attr("value",i)
			.text(i)
			.css("background-color",data.categories[i].color)
			.click(function() {
				global.cat = $(this).attr("value");
				updateMap();
			}).appendTo("#buttonbar");
		}
		$(document.createElement("div"))
		.addClass("swatch")
		.attr("value",-1)
		.text("Biggest issue")
		.css('background-color',data.colorscheme.defaultFill)
		.click(function() {
			global.cat = "Biggest Issue";
			updateMap();
		}).appendTo("#buttonbar");
	};
});