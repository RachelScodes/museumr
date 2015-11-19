'use strict'
var mongoose = require('mongoose');

// ~~~ END SETUP

var Painting = new mongoose.Schema({
   // title
   title: String,
   // image url
   img_url: String,
   // year
   year_made: String
})


painting.Schema.pre('save', (next)=>)
