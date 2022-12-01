var mustache = require("mustache");

var result = mustache.render("Hello, {{first}} {{last}}", {
                            first: "Nicole",
                            last: "Kidman"



})

console.log(result);