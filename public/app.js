'use strict';

$(function(){

	console.log('loaded bro');
	console.log('hit1');
	// console.log(data);

	// Artists -- Display All
	var renderTemplate_artists = Handlebars.compile($('template#artist-template').html());

	$('.artist-link').click((event) => {
		event.preventDefault();

		console.log('hit2');
		// console.log(data);

		$.get('/', renderArtists, 'json')
	});

	var renderArtists = (data) => {
		var $list = $('.results-div');
		console.log('hit4');
		console.log(data);

		var compiledTemplate = renderTemplate_artists(data);
		$list.html('').append(compiledTemplate);
	}

console.log('hit3');
// console.log(data);

	// // Paintings -- Display All
	// var renderTemplate_paintings = Handlebars.compile($('template#painting-template').html());
	//
	// $('.paintings-link').click((event) => {
	// 	$.get('/museumr/artists/:artist_name', render)
	// });
	//
	//
	//
	// var renderTemplate_artistForm = Handlebars.compile($('template#artist-form-template').html());
	//
	// var renderTemplate_artistEdit = Handlebars.compile($('template#artist-edit-template').html());
	//
	// var renderTemplate_paintingForm = Handlebars.compile($('template#painting-form-template').html());




	// // Add Artist -- post new Artist
	// $('.new-artist')
	//
	// // Add Painting -- post new Painting (to Artist)
	// $('.new-painting')














});
