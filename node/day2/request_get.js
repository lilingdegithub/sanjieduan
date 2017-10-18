

// request get 请求 

var https = require("https");
var querystring = require("querystring");

var url = "https://api.douban.com/v2/movie/top250";



const options = {
    hostname:'api.douban.com',
    port:443,
    path:"/v2/movie/top250",
    method:"GET"
}

const request = https.request(options,(res)=>{
    console.log(`状态码: ${res.statusCode}`);
    console.log(`请求头: ${querystring.stringify(res.headers)}`);

    var responseData = "";
    var count = 0;
    // 接受数据的过程 监听
    res.on("data",(chunk)=>{
        count++;
        console.log(`${count}===${chunk}`);
        responseData+=chunk;
    });

    // 监听数据传输结束
    res.on("end",()=>{
        console.log("数据接受完毕!");

        var data = JSON.parse(responseData);
        console.log(data);

        data.subjects.forEach((item,idx)=>{
            console.log(`《${item.title}》 ----  ${item.year}`);
        })
    })
    
});

request.on("error",function(err){
    console.log(err);
})

// 结束请求 
request.end();