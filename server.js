var http = require('http');
var dns = require('dns');
var express = require('express');
var gulp = require('gulp');
var status = require('./status.json');
var fs = require('fs');
const PORT=8888;

function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}
console.log(status.first + ' '+ status.middle + ' '+ status.last);
var server = http.createServer(handleRequest);
fs.readFile('./smthng.txt','utf8',function (err, data) {
    console.log(data);
});
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
