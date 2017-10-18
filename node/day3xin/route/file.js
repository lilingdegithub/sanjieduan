

// 进行文件操作  

var fs = require("fs");


module.exports = {
    readHtml(file,res){
        fs.readFile(file,"utf8",(err,data)=>{
            if(err) throw err;
            // console.log(data);
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write(data);
            res.end();
        })
    },
    readImg(file,res){
        fs.readFile(file,"binary",(err,data)=>{   // binary 读取图片格式  二进制
            if(err) throw err;
            // console.log(data);
            res.writeHead(200,{"Content-Type":"image/jpeg"}); // 读取图片的响应头 

            res.write(data,"binary");  //读取图片

            res.end();
        })
    },
    readHTMLFile(path,res){
        fs.readFile(path,"utf8",(err,data)=>{
            if(err) throw err;
            console.log(data);
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write(data);
            res.end();
        })
    },
    readPostFile(path,res,postData){
        console.log(postData);
        var array = ['username','password'];
        var username = postData["username"];
        var password = postData["password"];
        fs.readFile(path,"utf-8",(err,data)=>{
            if(err) throw err;
            console.log(data);
            // data  {username}  进行替换 
            // [a-z] {6-12}  (3|5|8)   
            // var telReg= new RegExp('^1(3|4|5|7|8)\d{9}$')  
            // gi golbal i ignore
            array.forEach((value,idx)=>{
                var reg  = new RegExp("{"+value+"}","gi");
                data = data.replace(reg,postData[value]);
            });

            // 判断用户名密码是否存在
            if(username&&password){
                console.log("登录成功");
                data = data.replace(/{infoClass}/gi,"");
                data = data.replace(/{formClass}/gi,"hide");
            }else{
                console.log("没有登录");
                data = data.replace(/{infoClass}/gi,"hide");
                data = data.replace(/{formClass}/gi,"");
            }
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write(data);
            res.end();
        })
    }
}