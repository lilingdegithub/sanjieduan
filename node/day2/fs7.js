

// rmdir   移除文件夹
// unlink  删除文件


//  先删除文件 再移除文件夹

// 删除文件  先读取文件名 再删除文件  
var fs = require("fs");

var files = fs.readdirSync("logs");
console.log(files);

files.forEach((value,idx,list)=>{
    fs.unlink(`logs/${value}`,(err)=>{
        if(err) throw err;
        console.log(`删除文件成功---${value}---${idx}`);
    })
});

// 移除目录  必须是空目录 

fs.rmdir("logs",(err)=>{
    if(err) throw err;
    console.log("logs 文件夹删除成功!");
});