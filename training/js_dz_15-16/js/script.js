var startURL = 'https://api.riffsy.com/v1/search?';
var startQuery = '&tag=';//<query>
var keyQuery = 'key=LIVDSRZULELA';
var limitsQuery = '&limit=5';
var nextURL;
var textQuery;


function addList(url) {

	$.getJSON(url,
		function(data){
			if (data.results.length === 0) {
				$('#results').append('<ol class="items"><span>Nothing was found<span></ol>');
				return;
			};
			$('#nextResult').css('display','block');			
			console.log('loaded data=', data.results);
			for (var i = 0; i < data.results.length; i++) {
				var tagsText='';
				for (var j = 0; j < data.results[i].tags.length; j++) {
					tagsText = tagsText + " '" + data.results[i].tags[j] + "'";
				}
				$('ol.items').append('<li><span>' + data.results[i].title + '</span><span>' + tagsText 
					+ '</span><img src='+data.results[i].url+'><img></li>');
			};
			nextURL = startURL + keyQuery + startQuery + textQuery + "&pos=" + data.next + limitsQuery;
		});
};

function getSearch(queryText) {
	textQuery = queryText;
	var urlText = startURL + keyQuery + startQuery + queryText  + limitsQuery;
	$('ol.items').remove(); $('#nextResult').css('display','none');
	$('#results').append('<ol class="items"></ol>');
	addList(urlText);	
};

$(function () {
	$('#startSearch').on('click', function(e) {
		e.preventDefault();
		getSearch($('#textSearch').val());
	});


	$('input#textSearch').keypress(function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode === 13){
    	e.preventDefault();
    	console.log('enter pressed');
        getSearch($('#textSearch').val());
    }
	});

});

$(document).on('click', 'button#nextResult', function(e) {
		e.preventDefault();
		console.log('nextURL=', nextURL);
		addList(nextURL);
	});




