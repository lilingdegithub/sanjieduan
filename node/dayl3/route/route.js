
var file=require("./file");

module.exports={
    home(req,res){
        file.readHtml("./views/home.html",res);
    },
    login(req,res){
        file.readHtml("./views/login.html",res);
    },
    register(req,res){
        file.readHtml("./views/register.html",res);
    },
    img(req,res){
        file.readImg("./views/dog.html",res);
    }
}