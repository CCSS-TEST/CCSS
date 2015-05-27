$("#demo[header=headerGeneral] button").tapend(function(){
	console.log("Sending Demo Request");
	requestService({"productName": "Ahorro-2510","code": "DEMO-es", "description": "DEMO"});
	
});