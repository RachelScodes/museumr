'use strict';

$(() => {

	let renderTemplate_artists = Handlebars.compile($('template#artist-template').html());

	// Artists -- Display All
	$('.artist-link').click((event) => {
		$.get('/museumr/artists', renderArtists, 'json')
	});

	let renderArtists = (data) => {
		let list = $('.results-div');
		let compiledTemplate = renderTemplate_artists(data);
		list.html('').append(compiledTemplate);
	}


	let renderTemplate_paintings = Handlebars.compile($('template#painting-template').html());

	// Paintings -- Display All
	$('.paintings-link').click((event) => {
		$.get('/museumr/artists/:artist_name', render)
	});



	let renderTemplate_artistForm = Handlebars.compile($('template#artist-form-template').html());

	let renderTemplate_artistEdit = Handlebars.compile($('template#artist-edit-template').html());

	let renderTemplate_paintingForm = Handlebars.compile($('template#painting-form-template').html());




	// Add Artist -- post new Artist
	$('.new-artist')

	// Add Painting -- post new Painting (to Artist)
	$('.new-painting')














});
