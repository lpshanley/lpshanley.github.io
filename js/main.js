$( document ).ready(function(){
	
	$.ajax({
		url: 'https://api.github.com/repos/lpshanley/mnsure-script-engine/branches',
		async: false
	}).success(function( result ){

		$.each(result,function(key,repo){
			
			console.log( `Name: ${repo.name}` );
			console.log( repo.commit ); //${ repo.commit.sha.substring((repo.commit.sha.length - 7), repo.commit.sha.length) }` );
			
		});
		
	});
	
});