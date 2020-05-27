const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');

// routes
app.get('/artist', (req, res) => {
  db.Artist.findAll().then(results => {
    res.json(results);
  });
});

app.post('/artist/:id', (req, res) => {
  db.Artist.create({
    artist_id: req.params.id // data
  }).then(response => {
    res.json(response)
  });
});

app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));
