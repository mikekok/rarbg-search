// Modules
const request = require('request')
const cheerio = require('cheerio')

// Rarbg.to base URL
let rarbgURL = 'https://rarbg.to'

module.exports = {
  search: function(keyword, cb) {
    let torrents = []
    var reqURL = rarbgURL + '/torrents.php?search=' + keyword
    request(reqURL, function(err, res, body) {
      var $ = cheerio.load(body)
      $('table.lista2t tr.lista2').each(function(index, el) {
        var torrent = {}
        torrent.name = $(this).find('td:nth-child(2) a').text()
        torrent.seeders = $(this).find('td:nth-child(5)').text()
        torrent.leechers = $(this).find('td:nth-child(6)').text()
        torrent.url = rarbgURL + $(this).find('td:nth-child(2) a').attr('href')
        if (torrent.name !== '') {
          torrents.push(torrent)
        }
      })
      return cb(null, torrents)
    })
  }
}
