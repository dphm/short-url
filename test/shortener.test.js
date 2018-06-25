const Shortener = require('../src/shortener');

let shortener = new Shortener();

afterEach(() => {
  shortener.reset();
});

test('can shorten url', () => {
  let url = "http://example.com/foo";
  let data = shortener.shorten(url);

  expect(data.id).toBeDefined();
  expect(data.url).toEqual(url);
  expect(data.short_url).toBeDefined();
  expect(data.hits).toEqual(0);
});

test('can retrieve url data', () => {
  let url = "http://example.com/foo";
  let data = shortener.shorten(url);

  expect(shortener.get_data(data.id)).toEqual(data);
});

test('can reset shortener', () => {
  let url = "http://example.com/foo";
  let data = shortener.shorten(url);

  expect(shortener.get_data(data.id)).toEqual(data);

  shortener.reset();

  expect(shortener.get_data(data.id)).toBeNull();
});

test('can increment hits', () => {
  let url = "http://example.com/foo";
  let data = shortener.shorten(url);
  let hits = data.hits;

  shortener.increment_hits(data.id);

  expect(shortener.get_data(data.id).hits).toEqual(hits + 1);
});
