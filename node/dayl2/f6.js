
//rename 重命名文件和目录

var fs = require("fs");

fs.rename("./logs/cj.log","./logs/rename.txt",(err)=>{
    if(err) throw err;
    console.log("文件重命名成功！")
});