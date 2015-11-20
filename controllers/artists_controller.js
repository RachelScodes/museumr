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
     console.log('hit get /artists - show all');
     Artist.find({}, function(err, data) {
        res.send(data);
        next();
     })
  });
  .post((req, res, next) => {
     //create new artist
     console.log('hit post /artists - add artist')
     let newArtist = new Artist({
       // TODO get this from the html?
       // name: req.body.name,
       // img_url: req.body.img_url,
       // nationality: req.body.nationality,
       // birthYear: req.body.birthYear,
       // description: req.body.description
     });
     newArtist.save((err) => {
       (err) ? res.send(err) : res.send(newArtist);
       next();
     });
  });

// using button, get artist by id
router.route('/:by_id')
   .get((req, res) => {
   // artist id should be retrieved by button and used to generate route
   let artistById = req.params.by_id
   console.log('show one artist with this id: ' + artistById);
   Artist.find({ id: req.params.by_id }, (err, artist) => {
     // find paintings by that artist
     Painting.find({"_id": {$in: result[0].paintings}}, (error, paintings) => {
       artist.push(paintings)
       res.send(artist);
    }); // end painting search
  }); // end get artist by id
});

// manually, get artist by name
router.route('/:by_name')
   .get((req, res) => {
   // don't forget %20 for spaces!
   let artistName = req.params.by_name
   console.log('show one artist with this name: ' + artistName);
   Artist.find({ name: artistName }, (err, artist) => {
     // find paintings by that artist
     Painting.find({"_id": {$in: result[0].paintings}}, (error, paintings) => {
       artist.push(paintings)
       res.send(artist);
    }); // end painting search
  }); // end get artist by id
});


// let a sistah know whassup
module.exports = router;
