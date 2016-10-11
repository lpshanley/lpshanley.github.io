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
	
	$.each( $( '#profile .profile-data div[data-value]' ), function( key, value ){
		
		var fillVal = "";
		
		switch( $( value ).attr('data-value') ){
			case "created_at":
				var apiDate = profile[$( value ).attr('data-value')]
				var date = apiDate.split("T")[0].split('-');
				fillVal = `${date[1]}-${date[2]}-${date[0]}`
				break;
			default:
				fillVal = profile[$( value ).attr('data-value')];
				break;
			
		}
		
		$( value ).text( fillVal );
		
	});
	
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