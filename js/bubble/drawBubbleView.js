define(["d3"],function(d3) {
	return function() {
		var infobox = d3.select("#infobox")
		.attr("value","Select a country: bubbles show the percentages for each category.");
		infobox.text(infobox.attr("value"));
		
		var bubble = d3.select("#bubbleview");
		bubble.style("height",d3.select("#mapcontainer").style("height"));
		bubble.style("width",d3.select("#bubblecontainer").style("width"));
		bubble.style("background-color","#ffffff");
		
		//Draw tooltip
		d3.select("#bubblecontainer").append("div")
		.attr("id","bubblelabel")
		.attr("class","hoverlabel ghost")
		.style("position", "absolute")
		.style("z-index", "10")
	};
});