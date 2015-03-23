/*
		Login Scripts
		
		Author: Juan Andres Segreda Johanning
		
*/




function login(){
	  //event.preventDefault();
		$.post('http://'+IP+':8089/appriz/login',{
			"email" : $('.loginBox input').eq(0).val(),
			"password":$('.loginBox input').eq(1).val(),
			"phone": typeof device !== 'undefined' ? device.model : "Browser",
			"os": typeof device !== 'undefined' ? device.platform : "Browser",
			"pushKey":  typeof device !== 'undefined' ? device.uuid : "Browser"
		},function(data){
			if(data["status"] == 200){
				$("div#login").hide();
				$("div#appHolder").show();
				idScretClient = data["idSecretClient"];
				$.jStorage.set('idSecretClient', data['idSecretClient']);
				$.jStorage.set('pin', data['pin']);
				callNewMSG();
				pin = data['pin'];
			//	getValidTimePeriods();
				
				//reloadEntities();
			
			}else{
				showInfoD('Wrong credentials','The credential that you use is invalid',function(){$('.moldHide, .dialogAlert').hide();});
				$('.loginBox input').eq(1).val("")
				
			}	
	}) .fail(function() {
			alert( "error" );
});
	
}


function checkPreviusLogin(){
	$.post('http://'+IP+':8089/appriz/getCurrentSession',{pushKey:  typeof device !== 'undefined' ? device.uuid : "Browser" },function(data) {
		if("idSecretClient" in data ){
			//	navigator.splashscreen.hide();
				$("div#login").hide();
				$("div#appHolder").show();
				if(data["pinPolicy"]==0){$('#divPIN').show();}
				idScretClient = data["idSecretClient"];
				logId = data["logId"];
				pinPolicy = data["pinPolicy"];
				pin = data["pin"];
				$.jStorage.set('idSecretClient', data['idSecretClient']);
				$.jStorage.set('pin', data['pin']);
				
				$('.splash').fadeOut(1000,function(){});
				// getValidTimePeriods();
				 callNewMSG();
				// reloadEntities();
				currentEntityID  = $.jStorage.get('currentEntityID');
				
				//$('link[typeCss="bank"]').attr('href','https://s3.amazonaws.com/tst_appriz_clients/'+FormatInteger(currentEntityID,4)+'/CSS/theme.css');
				//$('.header_demo img').attr('src','https://s3.amazonaws.com/tst_appriz_clients/'+FormatInteger(currentEntityID,4)+'/Advertising/Logos/big_logo.png');
				//counterByMsg();
				//current_inbox();
		}else{
			//navigator.splashscreen.hide();
			$('.splash').fadeOut(1000,function(){
				var heightEnd = Math.floor(window.innerHeight /2)-120;
				$('.LOGIN_FORM').css({"top" : heightEnd+"px"});
				$( '.LOGIN_BOTTOM , .LogginTop').velocity({"height" : 0},1000); 
			
			});

		};
	});
}


checkPreviusLogin();
/*--------------------------------------------------
	Events 
---------------------------------------------------*/
$( document ).on('tapend','.btnFull.submitLogin',function(){ login();});