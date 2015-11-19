'use strict'

var express = require('express');
var app = express();
app.use(express.static('./public'))

var bodyParser = require('body-parser');
// what's the diff bw true and false?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let Artist = require('./models/Artists');
let Painting = require('./models/Paintings');

var mongoose = require('mongoose');
//Connect to mongodb
mongoose.connect('mongodb://localhost:27017/museumrApp', function(err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});

// ~~~~ END SETUP

// routes go here.
app.get('/museumr', (req,res) => {
   console.log('IT\'S ALIIIIIVE!!!');
})

app.get('/museumr/artists', (req,res) => {
   console.log('show all artists');
   // console.log('data');
	Artist.find({}, (err, result) => {
	   console.log(result);
	   res.send(result);

	});
})

app.post('/museumr/artists', (req,res) => {
   console.log('create an artist');
})

app.get('/museumr/artist/:artist_id', (req,res) => {
   console.log('show one artist with this id: ' + req.params.artist_id);
})

app.put('/museumr/artist/:artist_id', (req,res) => {
   console.log('edit/update artist with this id: ' + req.params.artist_id);
})

app.delete('/museumr/artist/:artist_id', (req,res) => {
   console.log('delete artist with this id: ' + req.params.artist_id);
})


// mongoose magic
	// !!! we call our database methods on our models !!!
Artist.find

let parseArtists = (data) => {
	jsonData = JSON.parse(data);
	newData = [];
	for (let i = 0; i < jsonData.length; i++) {
		newData.push(jsonData[i]);
	}
	return newData;
}




// helper functions go here.









// server goes here:
// this way we can debug and get info on our server and port stuff
// let server = app.listen(3000, function() {
let server = app.listen(3000, () => {
   let host = server.address().address;
   let port = server.address().port;

   console.log('express running', host, port);
})
