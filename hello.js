var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n'); // build should pass now!
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var capabilities = {
    browserName: 'Safari',
    browser_version: '8.0',
    os: 'OS X',
    os_version: 'Yosemite',
    resolution: '1024x768',
    build: process.env.BS_AUTOMATE_BUILD,
    project: process.env.BS_AUTOMATE_PROJECT,
    'browserstack.user': "onkar15",
    'browserstack.key': "Hq4gX73YkTGJoqkx8ChJ"
}