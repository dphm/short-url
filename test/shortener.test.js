const Shortener = require('../src/shortener');

beforeEach(() => {
  Shortener.reset();
});

test('can shorten url', () => {
  let url = "http://example.com/foo";
  let data = Shortener.shorten(url);

  expect(data.url).toEqual(url);
  expect(data.short_url).toBeDefined();
  expect(data.hits).toEqual(0);
});

test('can retrieve url data', () => {
  let url = "http://example.com/foo";
  let data = Shortener.shorten(url);

  expect(Shortener.get_data(data.short_url)).toEqual(data);
});

test('can reset shortener', () => {
  let url = "http://example.com/foo";
  let data = Shortener.shorten(url);

  expect(Shortener.get_data(data.short_url)).toEqual(data);

  Shortener.reset();

  expect(Shortener.get_data(data.short_url)).toBeNull();
});

test('can increment hits', () => {
  let url = "http://example.com/foo";
  let data = Shortener.shorten(url);

  Shortener.increment_hits(data.short_url);

  expect(Shortener.get_data(data.short_url).hits).toEqual(1);
});
