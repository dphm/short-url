const
  bodyParser = require('body-parser'),
  express = require('express'),
  port = 3000,
  Shortener = require('./shortener'),
  shortener = new Shortener(),
  server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.set('view engine', 'pug');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/short/:id', (req, res) => {
  let short_url = req.path;
  let data = shortener.get_data(short_url);
  if (data) {
    shortener.increment_hits(short_url);
    res.redirect(data.url);  
  } else {
    res.status(404).send('URL Not Found');
  }
});

server.get('/stats/:id', (req, res) => {
  let short_url = `/short/${req.params.id}`;
  let data = shortener.get_data(short_url);
  if (data) {
    res.send(`Number of hits: ${data.hits}`);
  } else {
    res.status(404).send('URL Not Found');
  }
});

server.post('/', (req, res) => {
  let url = req.body.url;
  let data = shortener.shorten(url);
  res.send(data.short_url);
});

server.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});
