var INVADR = (function(invadr){
	
	invadr.stalkMethods["image"] = {};
	invadr.stalkMethods["image"].stalk = function( target, type ){
		
		if (type !== INVADR.types.IMAGE){
			return;
		}
		invadr.found( $("<img>").attr("src", target) );
		
	};
	
	invadr.stalkMethods["realname"] = {};
	invadr.stalkMethods["realname"].stalk = function( target, type ){
		
		if (type !== INVADR.types.REALNAME){
			return;
		}
		
		var nameDiv = $("<div>").addClass("content");
		$("<span>").addClass("custom-meta").html("Real Name: ").appendTo(nameDiv);
		$("<span>").addClass("custom-content").html( target ).appendTo(nameDiv);
		
		invadr.found( nameDiv );
		
	};
	
	return invadr;
	
}(INVADR));