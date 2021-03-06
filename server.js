const express = require('express');
const scraper = require('./scraper')
const app = express();

//Home page
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//API route
app.get('/api/search', (req, res) => {
  scraper.youtube(req.query.q, req.query.page)
    .then(x => res.json(x))
    .catch(e => res.send(e));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port 3000');
});

module.exports = app;
