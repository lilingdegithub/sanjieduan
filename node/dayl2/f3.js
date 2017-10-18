//创建文件writeFile   写入文件appendFile
var fs=require("fs");
fs.writeFile("logs/cj.log","hello node vue react angular \n","utf-8",function(err){
    if(err) throw err;
    console.log("创建文件成功！");
});

//文件不存在则创建文件  存在则写入文件appendFile

fs.appendFile("logs/cj.log","ha ha ha ha ha ha ha ha ha ha","utf-8",(err)=>{
    if(err) throw err;
    console.log("数据写入成功！");
});

for(var i=0;i<100;i++){
    fs.appendFile("logs/append.txt",`hello moumououmoumoumou===${i}\n`,'utf-8',function(err){
        if (err) throw err;
        console.log("文件写入成功！");
    })
}