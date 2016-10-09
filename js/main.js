$( document ).ready(function(){
	
	$.ajax({
		url: 'https://api.github.com/repos/lpshanley/mnsure-script-engine/branches',
		async: false
	}).success(function( data ){
		
		$.each(data,function(k,v){
			
			console.log( `Name: ${data.name}` );
			console.log( `Sha: ${ data.commit.sha.substring((data.commit.sha.length - 7), data.commit.sha.length) }` );
			
		});
		
		
	});
	
});