
//readdir 列出文件目录
var fs=require("fs");

fs.readdir("../dayl2",(err,files)=>{
    if(err) throw err;
    console.log(files);
    files.forEach(function(value,index,list){
        console.log(`${value}===${index}`)
    })
})