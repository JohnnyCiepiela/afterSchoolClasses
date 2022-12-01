var fs = require("fs");

var options = {encoding: "utf-8"};

fs.readFile("Payslip.pdf", options, function(err, data) {

    if (err) {
console.log("Error reading a file: " + err);

    } else {

console.log("Reading completed!");
    }
})

console.log("Hello World!");