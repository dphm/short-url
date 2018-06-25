const Store = require('../src/store');

test('can insert and retreive data', () => {
  let store = new Store();
  let data = {
    field: 'value'
  };

  store.insert(data);

  expect(store.get_data('field', 'value')).toEqual(data);
});
