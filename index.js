var framework = require('total.js');
var http = require('http');

var port = parseInt(process.argv[2] || '8000', 10);
var debug = true;

framework.run(http, debug, port);

// framework.test(true);