define(["d3","data"],function(d3,data) {
	return function() {
		var bubble = d3.select("#bubbleview");
		bubble.selectAll("*").remove();

		if(!global.country){ return };
		d3.select("#infobox").text(global.country);

		var countryid;
		for(countryid in data.countrycodes) {
			if(data.countrycodes[countryid].name === global.country) { break; }
		}
		if(!data.ratios[global.wave][countryid]) { return }

		var w = parseInt(bubble.style("width"));
		var h = parseInt(bubble.style("height"));
		var i = 0;
		var circles = [];

		for(c in data.categories) {
			if(data.ratios[global.wave][countryid][i]) {
				circles.push({
					value: data.ratios[global.wave][countryid][i],
					radius: 0.2 * w * data.ratios[global.wave][countryid][i],
					color: data.categories[c].color
				})
				i++;
			}
		}

		var force = d3.layout.force()
		.nodes(circles)
		.size([w, h])
		.charge(function(d) {return -5 * d.radius})
		.on("tick", tick)
		.start(); 

		var node = bubble.selectAll(".node")
		.data(force.nodes())
		.attr("class", "node")
		.enter()
		.append("g")
		.call(force.drag);

		node.append("circle")
		.attr("r",function(d) { return d.radius })
		.style("fill", function(d) { return d.color })
		.style("stroke", "black")
		.on("mouseover", function(d) {
			return d3.select("#bubblelabel").text( Math.round(d.value * 100) + "%").classed("ghost",false);
		})
		.on("mousemove", function() {
			return d3.select("#bubblelabel").style("top", (event.pageY-20)+"px").style("left",(event.pageX-100)+"px");
		})
    	.on("mouseout", function() {
    		return d3.select("#bubblelabel").classed("ghost",true);
    	})

    	function tick() {
			node.attr("transform", function (d) {
				return "translate(" + d.x + "," + d.y + ")";
			});
		}
	};
});