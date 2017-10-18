
var fs=require("fs");
var zlib=require("zlib");//文件压缩

// 可读流   fs.createReadStream()
// 可写流   fs.createWriteStream()

var fileReadStream=fs.createReadStream("data.json",{encoding:"utf8"});

var fileWriteStream = fs.createWriteStream("data-yasuo.json.gz",{encoding:"utf8"});

//1.监听读写
//2.pipe 链式操作

fileWriteStream.on("pipe",(source)=>{
    console.log(111);
    console.log(source);
})

fileReadStream
   .pipe(zlib.createGzip())
   .pipe(fileWriteStream)
