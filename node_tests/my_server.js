var http = require("http");


function requestHandler(request, response) {

    console.log("I received a request, URL requested: " + request.url);
    response.end("Hello World!");

}


var server = http.createServer(requestHandler);
server.listen(3000);