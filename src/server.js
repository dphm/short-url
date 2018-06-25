const
  bodyParser = require('body-parser'),
  express = require('express'),
  Shortener = require('./shortener'),

  config = {
    port: 3000,
    short_prefix: 'short',
    stats_prefix: 'stats'
  },

  shortener = new Shortener(config.short_prefix),
  server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.set('view engine', 'pug');

server.get('/', (req, res) => {
  res.render('index');
});

server.get(`/${config.short_prefix}/:id`, (req, res) => {
  let id = req.params.id;
  let data = shortener.get_data(id);
  if (data) {
    shortener.increment_hits(id);
    res.redirect(data.url);  
  } else {
    res.status(404).send('URL Not Found');
  }
});

server.get(`/${config.stats_prefix}/:id`, (req, res) => {
  let id = req.params.id;
  let data = shortener.get_data(id);
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

server.listen(config.port, () => {
  console.log(`Listening on localhost:${config.port}`);
});
