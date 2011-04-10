var INVADR = (function(invadr){
	
	invadr.stalkMethods["url"] = {};
	invadr.stalkMethods["url"].stalk = function( target, type ){
		
		if (type !== INVADR.types.URL){
			return;
		}
		
		var linkDiv = $("<div>").addClass("content");
		$("<span>").addClass("custom-meta").html("Linky: ").appendTo(linkDiv);
		$("<a>").attr("href", target).html(target).appendTo(linkDiv);
		
		invadr.found( linkDiv );
		
	};
	
	return invadr;
	
}(INVADR));