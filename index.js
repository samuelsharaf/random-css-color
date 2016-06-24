var http = require('http')
var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hello World\n')
})
var port = process.env.SERVICE_PORT || process.env.PORT || 5000
server.listen(port, '0.0.0.0')

