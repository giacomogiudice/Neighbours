define(["jquery","map/drawMap","controller/drawController","map/drawLegend","map/updateMap"],
	function($,map,drawController,drawLegend,updateMap) {
	$(function() {
		global.map = map;
		drawController();
		drawLegend();
		updateMap();
	});
});