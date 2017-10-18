
//进行文件操作

var fs=require("fs");

module.exports={
    readHtml(file,res){
        fs.readFile(file,"utf8",(err,data)=>{
            if(err) throw err;
            cnsole.log(data);
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.write(data);
            res.end();
        })
    },
    readImg(file,res){
        fs.readFile(file,"binary",(err,data)=>{ // binary 读取图片格式  二进制
             if(err) throw err;
             res.writeHead(200,{"Countent-Type":"image/jpeg"});//读取图片响应头

             res.write(data,"binary");读取图片

             res.end();
        })
    }
}