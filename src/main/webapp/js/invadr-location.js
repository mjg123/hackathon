var INVADR = (function(invadr){
	
	invadr.stalkMethods["location"] = {};
	invadr.stalkMethods["location"].stalk = function( target, type ){
		
		if (type !== INVADR.types.LOCATION){
			return;
		}
		
		var locationDiv = $("<div>").addClass("custom");
		$("<span>").addClass("custom-meta").html("Location: ").appendTo(locationDiv);
		$("<span>").addClass("custom-content").html(target).appendTo(locationDiv);
		
		invadr.found( locationDiv );
		
		var mapUrl = "http://maps.google.com/maps/api/staticmap?center="+
					  target + "&size=512x256&maptype=roadmap&sensor=false"
					  + "&markers=color:red|label:X|"+target;
		
		var mapDiv = $("<img>").addClass("map").attr("src", mapUrl);
		invadr.found(mapDiv);
		
	};
	
	return invadr;
	
}(INVADR));