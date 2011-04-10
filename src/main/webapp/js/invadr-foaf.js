var INVADR = (function(invadr){
	
	var foafs = [];
	
	invadr.stalkMethods["foaf"] = {};
	invadr.stalkMethods["foaf"].stalk = function( target, type ){
		
		if (type !== INVADR.types.FOAF){
			return;
		}
		
		if ( $.inArray(target, foafs) !== -1 ){
			return;
		}
		
		var foafDiv = $("<div>").addClass("content");
		$("<span>").addClass("custom-meta").html("Friend/Family: ").appendTo(foafDiv);
		$("<span>").addClass("custom-content").html(target).appendTo(foafDiv);
		
		invadr.found( foafDiv );

		foafs.push(target);
		
	};
	
	return invadr;
	
}(INVADR));