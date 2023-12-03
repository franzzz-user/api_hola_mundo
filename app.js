const http = require ('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader ('content-Type', 'application/json');
    res.end ('{"mensaje" : "Alo Mundo"}');
});

server.listen(port, hostname, () => {
    console.log(`Aparecio un server en http://${hostname}:${port}/`);
   })