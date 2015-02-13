define(["require","jquery","d3","topojson","datamaps","bubble/updateBubbleView","data"],
	function(require,$,d3,topojson,Datamap,updateBubbleView,data) {
	var hoverLabel = function(geo,content) {
		if(content === null || !content.value) {
			return ['<div class="hoverlabel">',
			geo.properties.name,
			'</div>'].join('');
		}
		else if (!isNaN(content.value)) {
			return ['<div class="hoverlabel">',
			geo.properties.name, " ", Math.round(content.value * 100), "%",
			'</div>'].join('');
		}
		else
		{
			return ['<div class="hoverlabel">',
			geo.properties.name,
			'</div>'].join('');
		}
		
	};

	var loadFills = function() {
		var fills = data.colorscheme;
		for(i in data.categories) {
			fills[i] = data.categories[i].color;
		}
		return fills;
	};

	var map = new Datamap({
		element: $('#mapcontainer')[0],
		projection: 'mercator',
		responsive: false,
		fills: loadFills(),
		data: {},
		geographyConfig: {
			highlightOnHover: false,
			popupTemplate: hoverLabel
		},
	});

	// Set zooming
	d3.select('.map').select('g').selectAll('path').style('vector-effect', 'non-scaling-stroke');
	map.svg.call(d3.behavior.zoom().on("zoom", function() {
		map.svg.selectAll("g")
		.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
	}));

	//add onlick event
	map.svg.selectAll('.datamaps-subunit').on('click', function(geo) {
		global.country = geo.properties.name;
		updateBubbleView();
	});
	return map;

});