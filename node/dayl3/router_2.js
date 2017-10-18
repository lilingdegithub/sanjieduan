
var http=require("http");

var hostname="localhost";

var port=7000;

var url=require("url");

var route=require("./route/route");

// 路由   根据不同的url 地址 加载不同的页面或者数据 

var server=http.createServer((req,res)=>{

    if(req,url!="/favicon.ico"){
        console.log(req,url);
        var patename=url.parse(req.url).pathname.replace(/\//,"");
        console.log(pathname);
         
    try{
        route[pathname](req,res)
    }catch(err){
         console.log("路由匹配失败！")
         route["home"](req,res);
      }
    }
});

server.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})