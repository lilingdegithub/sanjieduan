

//  mkdir 创建文件夹

var fs = require("fs");

fs.mkdir("logs",(err)=>{
    if(err){
        console.log(err);
        console.log("创建文件夹失败")
    }else{
        console.log("创建文件夹成功")
    }
});

