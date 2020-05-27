const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./models');

// routes
app.get('/', (req, res) => {
  db.Album.findAll()
    .then(results => {
      res.json(results);
    });
});

app.get('/artist', (req, res) => {
  db.Artist.findAll()
    .then(results => {
      res.json(results);
    });
});

app.post('/artist', (req, res) => {
  db.Artist.create({
    artist_id: req.params.artist_id
  })
    .then(response => {
      res.json(response);
    });
});

app.post('/album/:id/track', (req, res) => {
  db.Track.create({
    track_name = req.body.track_name,
    track_duration = req.body.track_duration,
    album_id = req.body.album_id
  }).then(response => {
    res.json(response);
  });
});

app.post('/artist/:id/album', (req, res) => {
  db.Album.create({
    album_name = req.body.album_name,
    year = req.body.year,
    artist_id = req.body.artist_id
  }).then(response => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`Listening: http://localhost:${PORT}`)
});
