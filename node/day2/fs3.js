

// 创建文件 writeFile
// 写入文件 appendFile

var fs = require("fs");

fs.writeFile("logs/hello.log","hello node vue react angular \n","utf-8",function(err){
    if(err) throw err;
    console.log("创建文件成功");
});

// 文件不存在则 创建文件  
fs.appendFile("logs/hello.log","hello CD1706 daydayup \n","utf-8",(err)=>{
    if(err) throw err;
    console.log("数据写入成功!");
});


for(var i=0;i<100;i++){
    fs.appendFile("logs/demo.txt",`hello cd1706 ===${i}\n`,'utf-8',function(err){
        if(err) throw err;
        console.log("文件写入成功!");
    })
}