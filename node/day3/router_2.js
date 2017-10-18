
var http = require("http");

var hostname = "localhost";    // 10.7.183.84

var port = 7000;

var url = require("url");

var route = require("./route/route");

// 路由   根据不同的url 地址 加载不同的页面或者数据 
var server = http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    if(req.url!="/favicon.ico"){
        console.log(req.url);
        var pathname = url.parse(req.url).pathname.replace(/\//,"");
        console.log(pathname);
        // res.write("daydayup");
        // res.end();

        // 对象  route.home      route[pathname]
        // if(pathname=="home"){
        //     route.home(req,res);
        //     route["home"](req,res);
        //     route[pathname](req,res);
        // }
        try{
            route[pathname](req,res)
        }catch(err){
            console.log("路由匹配失败!");
            // 路由重定向 输入错误地址  404
            route["home"](req,res);
        }
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})