//  stat  查看文件信息   查看文件或者文件夹  

var fs=require("fs");

fs.stat("./event.js",function(err,stats){
    if(err){
        console.log(err)
    }else{
        console.log(stats);
        console.log(`文件：${stats.isFile()}`);
        console.log(`${stats.isDirectory()?"这是目录文件":"这是一个文件"}`)
    }
});

fs.stat("../day1",(err,stats)=>{
    if(err) throw err;//如果有err就抛出错误 终止执行
    console.log(stats.isDirectory());
    console.log(`${stats.isDirectory()?"这是文件目录":"这是一个文件"}`)
})