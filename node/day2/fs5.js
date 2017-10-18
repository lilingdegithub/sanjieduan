

// readdir  列出文件目录  

var fs = require("fs");


fs.readdir("../day1",(err,files)=>{
    if(err) throw err;
    console.log(files);
    // forEach   就是遍历数组    for 

    // value 表示  每一项的值
    // idnex 表示 索引
    // list 表示当前数组

    files.forEach(function(value,index,list){
        console.log(`${value}===${index}`)
    })

}) 