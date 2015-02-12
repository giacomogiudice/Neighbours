define(["jquery","data"], function($,data) {
	return function() {
		$('<div class="swatch"><strong>Legend </strong></div>').appendTo("#legend");
		$.each(data.colorscheme, function(i,color) {
			if(i === "defaultFill") {
				$('<div class="swatch">No Data</div>').appendTo("#legend")
				.css('background-color',color);
			}
			if(!isNaN(i)) {
				$('<div class="swatch">' + Math.round(i/20 * 100) + '%</div>').appendTo("#legend")
				.css('background-color',color);
			}
		});
	};
});
