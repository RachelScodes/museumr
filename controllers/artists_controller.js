'use strict';

let express = require('express');
let router = express.Router();

let Artist = require('../models/Artist');

///////////////
//~END SETUP~//
///////////////

// the '/' means '/artists'
router.route('/')
  .get((req, res, next) => {
     //show all artists
     console.log('hit /artists');
     Artist.find({}, function(err, data) {
        res.send(data);
        next();
     })
  });

// // add a new artist
// router.route('/new')
//   .post((req, res, next) => {
//     console.log('hit artists/new')
//     let artist = new Artist({data?})
//
//     artist.save((err) => {
//       (err)? res.send(err) : res.send(artist);
//       next();
//      })
//   })



// let a sistah know whassup
module.exports = router;
