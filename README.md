# rarbg-search
A Node.js module to search for torrents at RARBG tracker.

## Installation
* `npm install rarbg-search`

## Usage
```javascript
const rarbg = require('rarbg-search')

rarbg.search(keyword, function(err, results) {
  console.log(results) // returns name, size, seeders, leechers, url
})
```

## Packages
* [request](https://github.com/request/request)
* [cheerio](https://github.com/cheeriojs/cheerio)

## License
This project is licensed under The MIT License (MIT). Which means that you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software. But you always need to state that xWeb is the original author of this template.

Project is developed and maintained by [xWeb](https://xweb.gr/).
