
view = "unselect";
function addProducts(products,view){
	$('#products .products ul').html('');
	for( product in products){
		$('#products .products ul').append('<li page-content='+view+'><button><prd>'+product+'</prd><span class="icon-arrow"><span class="path1"></span><span class="path2"></span></span></button></li>');
	}

}
function getProducts(view){
	
	if(pinPolicy==1){$('#pin').show();}
		$.post('http://'+IP+':8089/appriz/getProductsByClient',{"idSecretClient": idScretClient,"entityName": $('#entities li[entityId='+currentEntityID+']').find('img').attr("alt"),"view":view,},function(data){
			console.log(JSON.stringify(data));
			
			if (data["status"]== 200){
				addProducts(data["products"],view);
			}
		
	},'json') .fail(function(e) {

	}).done(function(){$('#products p.title').html((view == 'rules' ? 'My Alerts' : 'Services')+'<i class="fa fa-angle-double-right"></i>Products </p>')});
}



$( document ).on("tapend","[products]",function(){
	getProducts($(this).attr("products"));
});

