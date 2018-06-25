class Store {
  constructor() {
    this.data = [];
  }

  get_data(field, value) {
    for (let data of this.data) {
      if (data[field] === value) {
        return data;
      }
    }

    return null;
  }

  insert(data) {
    this.data.push(data);
  }
}

module.exports = Store;
