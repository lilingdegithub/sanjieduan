

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

module.exports = {
    home(req,res){
        file.readHtml("./views/home.html",res); // 文路径相对于 router_2.js 最终被router_2调用并且执行 
    },
    login(req,res){
        file.readHtml("./views/login.html",res);
    },
    register(req,res){
        file.readHtml("./views/register.html",res);
    },
    img(req,res){
        file.readImg("./img/dog.png",res);
    }
}