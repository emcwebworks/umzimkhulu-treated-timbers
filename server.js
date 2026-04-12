const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.argv.find((a, i) => process.argv[i-1] === '--port') || 8080;
const mime = { '.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml' };
http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/') url = '/index.html';
  const fp = path.join(__dirname, url);
  const ext = path.extname(fp);
  fs.readFile(fp, (err, data) => {
    if (err) { fs.readFile(path.join(__dirname, 'index.html'), (e, d) => { res.writeHead(200, {'Content-Type':'text/html'}); res.end(d); }); return; }
    res.writeHead(200, {'Content-Type': mime[ext] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(port, () => console.log(`Server running on port ${port}`));
