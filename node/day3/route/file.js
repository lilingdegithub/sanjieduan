

// 进行文件操作  

var fs = require("fs");


module.exports = {
    readHtml(file,res){
        fs.readFile(file,"utf8",(err,data)=>{
            if(err) throw err;
            console.log(data);
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
    }
}