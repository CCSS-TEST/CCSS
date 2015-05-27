function getAds(){
	$.post('http://'+IP+':8089/appriz/getAdsByClient',{"idSecretClient" : idScretClient},function(data){
		$("#ads").html('<img src="'+data["Content"]+'" alt=""/>');
		swipeDelete();
	});
}

function swipeDelete(){
	$( "#ads img").swipe( 
		{
				//Generic swipe handler for all directions
				swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
					if(direction=='left' || direction=='right' ){
						$(this).fadeOut(2000).remove();
					}
				}
		});
	
}


