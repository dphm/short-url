class Store {
  constructor() {
    this.data = {};
  }

  get(id) {
    let data = this.data[id];
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  set(id, data) {
    this.data[id] = data;
  }
}

module.exports = Store;
