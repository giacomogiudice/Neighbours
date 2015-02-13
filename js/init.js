define(["jquery","map/drawMap","controller/drawController","map/drawLegend","map/updateMap","bubble/drawBubbleView"],
	function($,map,drawController,drawLegend,updateMap,drawBubbleView) {
	$(function() {
		$(".wrapper").width($(window).width() - 100);
		$("#mapcontainer").height($(window).height() - 200);
		global.map = map;
		drawController();
		drawBubbleView();
		drawLegend();
		updateMap();
	});
});