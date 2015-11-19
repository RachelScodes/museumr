'use strict'
var mongoose = require('mongoose');

// ~~~ END SETUP

var Painting = new mongoose.Schema({
   // title
   title: String,
   // image url
   img_url: String,
   // year
   year_made: Number,

   created_at: Date,

   updated_at: Date
});

paintingSchema.pre('save', (next) => {
	let now = new Data();

	this.updated_at = now;
	if ( !this.created_at ){
		this.created_at = now;
	}
	next();
});

let Painting = mongoose.model('Painting', paintingSchema);

module.exports = Painting;
