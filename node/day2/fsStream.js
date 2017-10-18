

var fs = require("fs");
var zlib = require("zlib");  //文件压缩

// 可读流   fs.createReadStream()
// 可写流   fs.createWriteStream()

var fileReadStream = fs.createReadStream("data.json",{encoding:"utf8"});

var fileWriteStream = fs.createWriteStream("data-3.json.gz",{encoding:"utf8"});

// 方法1 文件监听读写

// once 读取数据
// data 表示数据传输  
// fileReadStream.once("data",(chunk)=>{
//     console.log(chunk); 
// });

// // 监听数据传输
// var count = 0;
// fileReadStream.on("data",(chunk)=>{
//     console.log(`count:${++count}   chunk===`);
//     fileWriteStream.write(chunk);
// });

// fileReadStream.on("error",(err)=>{
//     console.log(err);
// })
// fileReadStream.on("end",function(){
//     console.log("====结束数据传输===="+count)
// })

// 2. pipe 链式操作
// 监听链式操作  

fileWriteStream.on("pipe",(source)=>{
    console.log(1);
    console.log(source);
})

fileReadStream
    .pipe(zlib.createGzip())     //压缩 
    .pipe(fileWriteStream)
