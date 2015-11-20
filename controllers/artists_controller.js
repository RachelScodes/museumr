'use strict';

let express = require('express');
let router = express.Router();

let Artist = require('../models/artist');

///////////////
//~END SETUP~//
///////////////

// the '/' means '/artists'
router.route('/')
  .get((req, res, next) => {
     console.log('hit /artists');
    Artist.find({}, function(err, data) {
      res.send(data);
      next();
    })
  });

// ??
module.exports = router;
