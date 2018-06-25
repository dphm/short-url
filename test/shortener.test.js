const Shortener = require('../src/shortener');

let shortener = new Shortener();

afterEach(() => {
  shortener.reset();
});

test('can shorten url', () => {
  let url = "http://example.com/foo";
  let data = shortener.shorten(url);

  expect(data.url).toEqual(url);
  expect(data.short_url).toBeDefined();
  expect(data.hits).toEqual(0);
});

test('can retrieve url data', () => {
  let url = "http://example.com/foo";
  let data = shortener.shorten(url);

  expect(shortener.get_data(data.short_url)).toEqual(data);
});

test('can reset shortener', () => {
  let url = "http://example.com/foo";
  let data = shortener.shorten(url);

  expect(shortener.get_data(data.short_url)).toEqual(data);

  shortener.reset();

  expect(shortener.get_data(data.short_url)).toBeNull();
});

test('can increment hits', () => {
  let url = "http://example.com/foo";
  let data = shortener.shorten(url);

  shortener.increment_hits(data.short_url);

  expect(shortener.get_data(data.short_url).hits).toEqual(1);
});
