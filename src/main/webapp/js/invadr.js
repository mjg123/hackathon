var INVADR = (function(){

	var invadr = {
			"stalkMethods" : {},
			"types" : { "TWITTER"  : "TWITTER"
					  , "IMAGE"    : "IMAGE"
					  , "LOCATION" : "LOCATION"
					  , "REALNAME" : "REALNAME"
					  , "FOAF"     : "FOAF"
					  , "URL"      : "URL"      }
	};
	
	invadr.found = function( msg ){
		$("#results").append(msg);
	};
	
	invadr.ajaxError = function ( junk, text, status ){
		d("Ajax error! " + text + " " + status);
	}
	
	invadr.stalk = function(target, type){
		d("Target acquired: " + target + " (" + type + ")");

		if ( target === undefined ){
			return;
		}
		
		for ( f in invadr.stalkMethods ){
			if (invadr.stalkMethods.hasOwnProperty(f)){
				invadr.stalkMethods[f].stalk( target, type );
			}
		}
		
	};
	
	return invadr;
	
}());

var d = function( msg ){ // debug
	if (console){
		console.log("INVADR: " + new Date() + msg);
	}
};

$(document).ready( function(){
	d("Page ready");
	$("body").append($("<div>").attr("id", "results"));
	$("#stalk").click( function (){
		INVADR.stalk( $("#target").val(), "raw" );
	});
});