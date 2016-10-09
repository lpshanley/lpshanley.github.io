$( document ).ready(function(){
	
	var addCard = function( data ){
		
		var div = $( '<div>',{ 'class':'card' });
		
		$( 'body' ).append( div );
		
	}
	
	$.ajax({
		url: 'https://api.github.com/repos/lpshanley/mnsure-script-engine/branches',
		async: true
	}).success(function( result ){

		$.each(result,function(key,repo){
			
			console.log( `Name: ${repo.name}` );
			console.log( `Sha: ${ repo.commit.sha.substring(0,7) }` );
			
		});
		
	});
	
});