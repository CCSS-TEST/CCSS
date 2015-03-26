
function addServices(services){
	$('#services .services ul').html('');
	 console.log(JSON.stringify(services));
	for( service in services){
	
		$('#services .services ul').append('<li service="'+service+'"><button><srv>'+services[service]+'</srv><span class="icon-arrow"><span class="path1"></span><span class="path2"></span></span></button></li>');
	}
}
function getServices(productName){
	$.post('http://'+IP+':8089/appriz/getServicesByProduct',{"idSecretClient": idScretClient,"productName":productName,},function(data){
			if (data["status"]== 200){
				addServices(data["services"]);
			}
		
	},'json') .fail(function(e) {
	}).done(function(){ $('.refreshing_list').hide(); });
	
}

function requestService(serviceObj){
	$.post('http://'+IP+':8089/appriz/sendServiceRequest',$.extend({"idSecretClient": idScretClient},serviceObj),function(data){
		if (data["status"]== 200){
			showInfoD('Sucessfull!','Your request was succesfully send',function(){$('.moldHide, .dialogAlert').hide();});
		}
	
	},'json') .fail(function(e) {

	}).done(function(){});
}

$( document ).on("tapend","[page-content=services]",function(){
	$("#services .productNav li").eq(1).find("button").html($(this).find("prd").html());
	getServices($(this).find("prd").html());
});

$(document ).on("tapend","[service]",function(){
	requestService({"productName": currentProduct, "code": $(this).attr('service'), "description": $(this).find("srv").html()});
});