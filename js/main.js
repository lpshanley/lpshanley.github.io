var addCard = function( data ){
	
	var sha = data.commit.sha.substring(0,7);
	
	var htmlString = `Repo: ${ data.name }<br/>Sha: ${ sha }`;
	
	var div = $( '<div>',{ 'class':'card', 'html':htmlString});

	$( '#main' ).append( div );

}

var populateProfile = function( data ){
	
	console.log( data );
	
}

$.ajax({
	url: 'https://api.github.com/repos/lpshanley/mnsure-script-engine/branches',
	async: true
}).success(function( result ){

	$.each(result,function(key,repo){
		
		addCard( repo );

	});
});

$.ajax({
	url: 'https://api.github.com/users/lpshanley',
	async: true
}).success(function( result ){

	populateProfile( result );
	
});