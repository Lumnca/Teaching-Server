var http = require("http");
var url = require("url");
var path = require("path");

var server = http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    res.writeHead(200,{'Content-Type': 'application/json;charset=utf-8'});

    if(pathname==="/"){
        res.end(JSON.stringify({"index":"欢迎来到首页"}));
    }
    else  if(pathname==="/health.json"){
        res.end(JSON.stringify({"status":"正常"}));
    }
    else {
        res.end("404 没有找到该路由对应的文件");
    }
}).listen(8060);