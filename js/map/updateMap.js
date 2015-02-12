define(["jquery","data"],function($,data) {
	return function() {
		var d = {};
		var r;
		var w = global.wave;
		//reset all colors
		$.each(data.countrycodes, function(i,value) {
			d[value.code] = {fillKey: "defaultFill", value: ""};
		});
		if(global.cat === "Biggest Issue") {
			$.each(data.ratios[w], function(i,value) {
				r = parseInt(data.ratios[w][i].indexOf(Math.max.apply(null,data.ratios[w][i])));
				d[data.countrycodes[i].code] = {fillKey: Object.keys(data.categories)[r], value: ""};
			});
			$('#legend').css("visibility","hidden");
		}
		else {
			$.each(data.ratios[w], function(i,value) {
				r = value[data.categories[global.cat].pos];
				if(r !== null) {
					d[data.countrycodes[i].code] = {fillKey: Math.round(r * 20), value: r};
				}
			});
			$('#legend').css("visibility","visible");
		}
		global.map.updateChoropleth(d);

	};
});