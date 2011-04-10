var INVADR = (function(invadr){
	
	var details = {}; 
	
	var goIfPossible = function(){
		
		if ( details.name && details.location ){
			d("GOT REALNAME AND LOCATION, LETS GO!");
		} else {
			return;
		}
		
		var iframeName = "iframe" + new Date().getTime();
		var iframe = $("<iframe>").attr("id", iframeName).attr("name", iframeName);
		iframe.attr("src", "proxy?looking_for="+details.name+"&location="+details.location );
		iframe.appendTo( $("#results") );
		
		iframe.load(function(){
			iframe.contents().find(".address").each(function(junk,c){
				if (c.innerHTML.indexOf("teaser") === -1){
					invadr.stalk( c.innerText, INVADR.types.LOCATION );
				}
			});
			iframe.contents().find(".additionalInfo").each(function(junk, c){
				if (c.innerText.indexOf("occupants") !== -1){
					$.each(c.innerText.split(":")[1].split(", "), function(junk, person){
						invadr.stalk($.trim(person), INVADR.types.FOAF);
					});
				}
			});
		});
		
		details = {};
	};
	
	invadr.stalkMethods["electoral-roll"] = {};
	invadr.stalkMethods["electoral-roll"].stalk = function( target, type ){
		
		if (type === INVADR.types.REALNAME){
			details.name = target;
			goIfPossible();
			return;
		}

		if (type === INVADR.types.LOCATION){
			details.location = target;
			goIfPossible();
			return;
		}
		
	};
	
	return invadr;
	
}(INVADR));