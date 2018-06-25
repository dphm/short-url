const Store = require('../src/store');

test('can get and set data', () => {
  let store = new Store();
  let id = 'identifier';
  let data = {
    field: 'value'
  };

  store.set(id, data);

  expect(store.get(id)).toEqual(data);
});
