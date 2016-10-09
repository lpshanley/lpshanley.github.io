$( document ).ready(function(){
	
	var gitObj = {};
	
	$.ajax({
		url: 'https://api.github.com/repos/lpshanley/mnsure-script-engine/branches',
		async: false,
		success: function(data){
			
			gitObj = data;
			
		}
	});

	console.log( gitObj );
	
});