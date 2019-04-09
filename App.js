const http = require('http');


function rqListener(req, resp)
{
    console.log(req);
    resp.setHeader('Content-Type','text/html');
    resp.write('<html>');
    resp.write('<head><title>Ciaoooo</title></head>');
    resp.write('<body><h1>Ciao da nodejs</h1></body>');
    resp.write('</html>');
    resp.end();

}
const httpServer = http.createServer(rqListener);
httpServer.listen(3000);