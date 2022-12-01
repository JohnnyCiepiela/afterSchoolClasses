var express = require("express");
var http = require("http");

var app = express();

app.use(function(req, res) {
    console.log("Hello World2!");
    res.end("Hello World4!")
});

app.listen(3000, function() {
    console.log("App started on port 3000.")
});

