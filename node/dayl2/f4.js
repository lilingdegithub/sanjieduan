
//readFile 读取文件内容

var fs=require("fs");

fs.readFile("./logs/cj.log","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})
fs.readFile("./logs/append.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data);
})

//同步执行
var data=fs.readFileSync("./logs/cj.log","utf-8");
console.log(data);