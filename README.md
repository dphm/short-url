# short-url

A basic url shortener

## Basic requirements

- [x] Build a webpage you can visit in a web browser
- [x] Make a form on this webpage
- [x] Make submitting the form return a new link
- [x] Make that link redirect you to the original site
- [x] Remember how many times that link is used

## Installation

### Dependencies

#### Yarn (package manager)

*[Yarn installation docs](https://yarnpkg.com/en/docs/install)*. If you have [Homebrew](https://brew.sh/):

```
brew install yarn
```

#### Node.js

*[Installing Node.js with a package manager](https://nodejs.org/en/download/package-manager/).* If you have [Node Version Manager](https://github.com/creationix/nvm) (nvm):

```
nvm install node
nvm use node
```

### short-url

```
git clone git@github.com:quelledanielle/short-url.git
cd short-url
yarn install
```

## Running the local server

```
yarn serve
```

Open [localhost:3000](http://localhost:3000) in a browser

## Libraries

* [Express](http://expressjs.com/): minimal web framework for Node.js
* [Pug](https://pugjs.org/api/getting-started.html): static template engine
* [Jest](http://jestjs.io/en/): JavaScript testing framework

## Advanced requirements

- [ ] Make shortened links not predictable
- [x] Display data on how much that link gets used
- [ ] Style page a bit
- [ ] Load test server
- [ ] Make click data private to whoever made the original shortened link
- [ ] Break down link click stats by browser
- [ ] Deploy site somewhere besides localhost
- [ ] Make a bookmarklet that gives the user the shortened version of a link without leaving a page.
- [ ] Update your link click stats in realtime (no refresh required)
- [ ] Allow user to choose a URL
