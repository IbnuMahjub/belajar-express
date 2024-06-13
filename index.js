const path = require('path');

const express = require('express');

const app = express();

const tagsData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/t/:tag', (req, res) => {
  const { tag } = req.params;
  const data = tagsData[tag];
  if (data) {
    res.render('tag', { data });
  } else {
    res.render('notfound', { tag });
  }
});


app.get('/cars', (req, res) => {
  const cars = ['Lambo', 'Ferari', 'Lexus']
  res.render('cars', { cars })
})

app.get('/random', (req, res) => {
  const math = Math.floor(Math.random() * 10) + 1;
  res.render('random', { random: math });
});

app.listen(8000, () => {
  console.log(`Server berjalan di http://localhost:8000`);
})