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

// let a sistah know whassup
module.exports = router;
