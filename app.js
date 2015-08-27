'use strict'

var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    port = process.env.PORT || 3000,
    server = http.createServer(app)

app.use('/public', express.static('public'))
app.use('/bower_components', express.static('bower_components'))
// app.use('/images', express.static('public/images'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'))
})

server.listen(port, 'localhost')
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address)
})
