'use strict';

$(function(){

	console.log('loaded bro');
	console.log('hit1');


	// Artists -- Display All
	var renderTemplate_artists = Handlebars.compile($('template#artist-template').html());

	$('.artist-link').click((event) => {
		event.preventDefault();

		console.log('hit3');


		$.get('/museumr', renderArtists, 'json')
	});

	var renderArtists = (data) => {
		var $list = $('.results-div');
		console.log('hit4');
		console.log(data);

		var compiledTemplate = renderTemplate_artists({artist: data});
		$list.html('').append(compiledTemplate);
	}

console.log('hit2');


	// Add Artist -- post new Artist
	var renderTemplate_artistForm = Handlebars.compile($('template#artist-form-template').html());
	$('.new-artist')

	var renderTemplate_artistEdit = Handlebars.compile($('template#artist-edit-template').html());


	// Add Painting -- post new Painting (to Artist)

	// // Paintings -- Display All
	// var renderTemplate_paintings = Handlebars.compile($('template#painting-template').html());
	//
	// $('.paintings-link').click((event) => {
	// 	$.get('/museumr/artists/:artist_name', render)
	// });

	// $('.new-painting')

	// var renderTemplate_paintingForm = Handlebars.compile($('template#painting-form-template').html());



















});
