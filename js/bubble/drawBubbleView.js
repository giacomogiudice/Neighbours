define(["d3"],function(d3) {
	return function() {
		var infobox = d3.select("#infobox")
		.attr("value","Select a country: bubbles show the percentages for each category.");
		infobox.text(infobox.attr("value"));
		
		var bubble = d3.select("#bubbleview");
		bubble.style("height", parseInt(d3.select("#mapcontainer").style("height")) - parseInt(infobox.style("height")));
		bubble.style("width",d3.select("#bubblecontainer").style("width"));
		bubble.style("background-color","#ffffff");
		
		//Draw tooltip
		d3.select("#bubblecontainer").append("div")
		.attr("id","bubblelabel")
		.attr("class","hoverlabel floater ghost")
	};
});