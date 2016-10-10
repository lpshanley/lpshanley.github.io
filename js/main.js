var addCard = function( data ){
	
	var sha = data.commit.sha.substring(0,7);
	
	var htmlString = `Repo: ${ data.name }<br/>Sha: ${ sha }`;
	
	var div = $( '<div>',{ 'class':'card', 'html':htmlString});

	$( '#main div.content-wrapper' ).append( div );

}

var populateProfile = function( profile ){
	
	console.log( profile );
	
	$('#profile-name').text( profile.name );
	
	var profileImage = $('<img>',{ 'src':profile.avatar_url, 'alt':'GitHub Profile Image' });
	
	$('#profile-image-wrapper').append( profileImage );
	
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