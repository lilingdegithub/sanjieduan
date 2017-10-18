

// module.exports = {
//     home:function(req,res){
//         res.write(`<h1>welcome to homehomehome</h1>`);
//         res.end();
//     },
//     login:function(req,res){
//         res.write(`<h1>login 开始</h1>`);
//         res.end();
//     },
//     register:function(req,res){
//         res.write(`<h1>马上注册</h1>`);
//         res.end();
//     }
// }


var file = require("./file");
var url = require("url");
var querystring = require("querystring");

module.exports = {
    home(req,res){
        file.readHtml("./views/home.html",res); // 文路径相对于 router_2.js 最终被router_2调用并且执行 
    },
    login(req,res){
        // 访问数据库 
        // 获取到用户名和密码 进行入库操作 


        // get请求  
        // console.log(req.url);
        // var urlObj = url.parse(req.url,true).query;
        // console.log(urlObj); 
        // console.log(urlObj.username);    
        // file.readHtml("./views/login.html",res);


        // post 请求
        // 监听数据传输
        var postData = "";

        // 监听请求数据传输 
        req.on("data",(chunk)=>{
            postData +=chunk;
        });

        req.on("end",()=>{
            console.log("数据接收完毕");
            console.log(postData);
            postData = querystring.parse(postData,"&");
            console.log(postData);
            // file.readHtml("./views/login.html",res);
            file.readPostFile("./views/login.html",res,postData);
        });

        req.on("error",(e)=>{
            console.log(e);
        })

        
    },
    register(req,res){
        // file.readHtml("./views/register.html",res);
        file.readHTMLFile("./views/register.html",res);
    },
    img(req,res){
        file.readImg("./img/dog.png",res);
    }
}