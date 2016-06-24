var http = require('http')
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end(randomColor() + '\n')
})
var port = process.env.SERVICE_PORT || process.env.PORT || 5000
var ip = process.env.HEROKU_PRIVATE_IP || '0.0.0.0'
server.listen(port, ip)

function randomColor () {
  var cssColors = ['black', 'red', 'purple', 'green']
  return cssColors[Math.floor(Math.random() * cssColors.length)]
}
