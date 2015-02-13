define(["jquery","d3","map/updateMap","bubble/updateBubbleView","data"],
	function($,d3,updateMap,updateBubbleView,data) {
	return function() {
		$('<div class="swatch"><strong>Time Period </strong></div>').appendTo("#timebar");
		var barheight = $("#timebar").height();

		$(document.createElement("img"))
		.addClass("arrow swatch")
		.attr("src","img/arrow-left.svg")
		.height(barheight)
		.click(function() { changeWave("left"); })
		.appendTo("#timebar");

		$('<div id="timedisp" class="swatch"></div>').appendTo("#timebar");

		$(document.createElement("div"))
		.css("position","relative")
		.attr("id","timelabel")
		.text(data.wavelabels[global.wave])
		.appendTo("#timedisp");

		$("#timedisp").width($("#timelabel").width() + 2);

		$(document.createElement("img"))
		.addClass("arrow swatch")
		.attr("src","img/arrow-right.svg")
		.height(barheight)
		.click(function() { changeWave("right"); })
		.appendTo("#timebar");

		function changeWave(dir) {
			var labelwidth = $("#timelabel").width();
			var duration = 250;
			if(dir === "left" && global.wave >= 1) {
				global.wave--;
				$("#timelabel").animate({left: labelwidth}, duration, function() {
					$("#timelabel").text(data.wavelabels[global.wave])
					.css("left", -labelwidth);
					$("#timelabel").animate({left: "+=" + labelwidth}, duration);
				});

			}
			else if(dir === "right" && global.wave < data.wavelabels.length - 1) {
				global.wave++;
				$("#timelabel").animate({left: -labelwidth}, duration, function() {
					$("#timelabel").text(data.wavelabels[global.wave])
					.css("left", labelwidth);
					$("#timelabel").animate({left: 0}, duration);
				});

			}
			else {
				$("#timelabel").animate({left: (dir === "left")? labelwidth/2 : -labelwidth/2},
				 duration, function() {
					$("#timelabel").animate({left: 0}, duration)
				});
				return;
			}

			// d3.select("#bubbleview").selectAll("*").remove();
			// var infobox = d3.select("#infobox");
			// infobox.text(infobox.attr("value"));
			updateBubbleView();
			updateMap();
		}
	};
});