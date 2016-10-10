var addCard = function( data ){
	
	var htmlString = `Repo: ${ data.name }<br/>Sha: ${ data.commit.sha.substring(0,7) }`;
	
	var div = $( '<div>',{ 'class':'card', 'html':htmlString});

	$( 'body' ).append( div );

}

$.ajax({
	url: 'https://api.github.com/repos/lpshanley/mnsure-script-engine/branches',
	async: true
}).success(function( result ){

	$.each(result,function(key,repo){
		
		//addCard( repo );

	});

});