var INVADR = (function(invadr){
	
	var makeStatus = function( status ){
		var statusDiv = $("<div>").addClass("custom");
		$("<span>").addClass("custom-meta").html( "Last tweet was" ).appendTo( statusDiv );
		$("<span>").addClass("custom-content").html( status.text ).appendTo( statusDiv );
		$("<span>").addClass("custom-meta").html( ", it was " ).appendTo( statusDiv );
		
		var minsAgo = (new Date().getTime() - new Date(status.created_at).getTime()) / (1000*60);
		minsAgo += 60; // hack for BST!
		minsAgo = Math.round(minsAgo);
		
		$("<span>").addClass("custom-content").html( minsAgo ).appendTo( statusDiv );
		$("<span>").addClass("custom-meta").html( " minutes ago." ).appendTo( statusDiv );

		return statusDiv;
	};
	
	var stalked = function( r ){
		invadr.stalk( r.profile_image_url,  INVADR.types.IMAGE );
		invadr.stalk( r.location,           INVADR.types.LOCATION );
		invadr.stalk( r.url,                INVADR.types.URL );
		invadr.stalk( r.name,               INVADR.types.REALNAME );
		invadr.found( makeStatus(r.status), INVADR.types.CUSTOM );
	};
	
	twitterStalk = {};
	
	twitterStalk.stalk = function( target, type ){
		
		if ( target.indexOf && target.indexOf("@") === 0 ){
			invadr.stalk( target.substring(1), INVADR.types.TWITTER );
			return;
		}

		if (type !== INVADR.types.TWITTER){
			return;
		}
		
		$.ajax({
			url: "http://api.twitter.com/1/users/show.json?screen_name=" + target + "&callback=?",
			dataType: "jsonp",
			success: stalked,
			error: invadr.ajaxError
		});
		
	};

	
	
	invadr.stalkMethods["twitter"] = twitterStalk;
	return invadr;
}(INVADR));