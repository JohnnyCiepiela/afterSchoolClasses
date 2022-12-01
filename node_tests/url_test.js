var url = require("url");

var parsedURL = url.parse("https://www.youtube.com/c/MikeShake");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

