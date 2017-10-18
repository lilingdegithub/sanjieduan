

// rename  重命名文件和目录

var fs = require("fs");

fs.rename("./logs/hello.log","./logs/he.txt",(err)=>{
    if(err) throw err;
    console.log("文件名重命名成功!")
});


