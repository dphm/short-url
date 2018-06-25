const Store = require('./store');

class Shortener {
  constructor(prefix='s') {
    this.reset();
    this.prefix = prefix;
  }

  reset() {
    this.store = new Store();
    this.id = 0;
  }

  shorten(url) {
    let data = {
      id: this.id,
      url: url,
      short_url: `/${this.prefix}/${this.id}`,
      hits: 0
    };

    this.store.set(data.id, data);
    this.id++;
    return data;
  }

  get_data(id) {
    return this.store.get(id);
  }

  increment_hits(id) {
    let data = this.get_data(id);
    data.hits++;
  }
}

module.exports = Shortener;
