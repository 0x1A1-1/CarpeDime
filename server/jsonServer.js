var http = require('http');
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('calendar.json', 'utf8'));
var server = http.createServer ( function(request,response){

response.writeHead(200,{"Content-Type":"application/json"});
if(request.method == "GET")
    {
        console.log("Requesting from calendar...");
        response.end(JSON.stringify(obj));
    }
else if(request.method == "POST")
    {
        response.end(JSON.stringify(obj));
    }
else
    {
        console.log("TOHERS");
        response.end("Undefined request .");
    }
});

server.listen(8000);
console.log("Server running on port 8000");
