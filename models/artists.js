'use strict';
let mongoose = require('mongoose');

// ~~~~ END SETUP

let artistSchema = new mongoose.Schema({
	// name
	name: String,
	// img_url
	img_url: String,
	// nationality
	nationality: String,
	// birthYear
	birthYear: String,
	// description
	description: String,

	created_at: Date,

	updated_at: Date

});

artistSchema.pre('save', (next) => {
	let now = new Data();

	this.updated_at = now;
	if ( !this.created_at ){
		this.created_at = now;
	}
	next();
});

let Artist = mongoose.model('Artist', artistSchema);

module.exports = Artist;













//
