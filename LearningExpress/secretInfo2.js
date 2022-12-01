const { response } = require("express");
var express = require("express");
var http = require("http");

var app = express();

app.use(function(req, res, next) {
    console.log("Hello to the Secret Info!" + "the HTTP method  is " + req.
    method + " and the URL is " + req.url);

    next();
});

app.use(function(req, res, next) {
    var minute = (new Date()).getMinutes();

    if(minute % 2 === 0) {
        next();
    } else {
        res.statusCode = 403;
        res.end("Not authorized");
    }

    console.log("We are continuing the flow  in this Middleware");

    return;
})

app.use(function(req, res, next) {
    res.end("Your balance is 30000");
});


app.listen(3000, function() {
    console.log("App started on port 3000.")
});

