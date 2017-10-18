
var http=require("http");
var hostname="localhost";

var port=7000;

var url=require("url");

var route=("./route/route");

// 路由   根据不同的url 地址 加载不同的页面或者数据 
var server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html;utf-8"});
    
    if(req.url!="/favicon.ico"){
        console.log(req,url);
        var pathname=url.parse(req,url).pathname.replace(/\//,"");
        console.log(pathname);

        try{
            route[pathname](req,res)
        }catch(err){
            console.log("路由匹配失败！");
            //路由重定向 输入错误地址  404
            route["home"](req,res);
        }
    }
});