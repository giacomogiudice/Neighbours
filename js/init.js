define(["jquery","map/drawMap","controller/drawController","map/drawLegend","map/updateMap","bubble/drawBubbleView"],
	function($,map,drawController,drawLegend,updateMap,drawBubbleView) {
	$(function() {
		global.map = map;
		drawController();
		drawBubbleView();
		drawLegend();
		updateMap();
	});
});