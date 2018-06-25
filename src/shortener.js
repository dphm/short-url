const Store = require('./store');

class Shortener {
  constructor() {
    this.reset();
  }

  reset() {
    this.store = new Store();
    this.id = 0;
  }

  shorten(url) {
    let data = {
      url: url,
      short_url: short_url(this.id),
      hits: 0
    };

    this.store.insert(data);
    this.id++;
    return data;
  }

  get_data(short_url) {
    return this.store.get_data('short_url', short_url);
  }

  increment_hits(short_url) {
    let data = this.get_data(short_url);
    data.hits++;
  }
}

function short_url(id) {
  return `/short/${id}`;
}

module.exports = Shortener;
