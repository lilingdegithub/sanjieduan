
//移除文件夹 rmdir
//unlink 删除文件

//先读取文件名  删除文件 再移除文件夹
var fs=require("fs");

var files=fs.readdirSync("logs");

console.log(files);

files.forEach((value,idx,list)=>{
    fs.unlink(`logs/${value}`,(err)=>{
        if(err) throw err;
        console.log(`删除文件成功---${value}---${idx}`);
    })
});
//删除文件夹 必须是空的
fs.rmdir("logs",(err)=>{
    if(err) throw err;
    console.log("logs 文件夹删除成功！")
})