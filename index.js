var http = require('http')
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end(JSON.stringify(randomColor()))
})
var port = process.env.SERVICE_PORT || process.env.PORT || 5000
var ip = process.env.HEROKU_PRIVATE_IP || '0.0.0.0'
server.listen(port, ip)

function randomColor () {
  var cssColors = ['black', 'red', 'purple', 'green']
  var color = cssColors[Math.floor(Math.random() * cssColors.length)]
  return {
    color: color,
    heroku_dns_formation_name: process.env.HEROKU_DNS_FORMATION_NAME,
    heroku_dns_dyno_name: process.env.HEROKU_DNS_DYNO_NAME,
    heroku_dns_app_name: process.env.HEROKU_DNS_APP_NAME,
    heroku_private_ip: ip
  }
}
