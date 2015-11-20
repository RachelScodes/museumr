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
  .post((req, res, next) => {
     // add a new artist
     console.log('create an artist');
  })

// will be hit by clicking div
router.route('/:id')
  .get((req, res, next) => {
    let artistObjectId = req.params.id
    console.log('show one artist with this id: ' + artistObjectId);
    Artist.find({_id: artistObjectId }, (err, result) => {
      // Get paintings by that Artist
      Painting.find({"_id": {$in: result[0].paintings}}, (error, paintings) => {
      result.push(paintings)
      res.send(result);
      next();
    })
  });

// will be hit by typing manually
// don't forget %20's!
router.route('/:name')
  .get((req, res, next) => {
    let artistName = req.params.name
    console.log('show one artist with this name: ' + artistName);
    Artist.find({name: artistName }, (err, result) => {
      // Get paintings by that Artist
      Painting.find({"_id": {$in: result[0].paintings}}, (error, paintings) => {
      result.push(paintings)
      res.send(result);
      next();
    })
  });


// let a sistah know whassup
module.exports = router;
