const Store = require('./store');

let store = new Store();
let id = 0;

function _shorten(url) {
  return `/short/${id}`;
}

function shorten(url) {
  let data = {
    url: url,
    short_url: _shorten(url),
    hits: 0
  };

  store.insert(data);
  id++;
  return data;
}

function get_data(short_url) {
  return store.get_data('short_url', short_url);
}

function increment_hits(short_url) {
  let data = get_data(short_url);
  data.hits++;
}

function reset() {
  store = new Store();
  id = 0;
}

module.exports = {
  shorten: shorten,
  increment_hits: increment_hits,
  get_data: get_data,
  reset: reset,
};
