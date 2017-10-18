

var http = require("http");
var querystring = require("querystring");

// post 提交表单数据
var postData = querystring.stringify({
    "question[title]":"成都1706-dayday",
    "question[content]":"<p>成都1706-dayday</p>",
    "question[courseId]":222,
    "question[lessonId]":1633,
    "_csrf_token":"37edbd44469b6d4642c8544f464a8033c9f09ed1"
});

var url = "http://www.codingke.com/ajax/create/course/question";

var options = {
    hostname:"www.codingke.com",
    port:80,
    path:"/ajax/create/course/question",
    method:"POST",
    headers:{
        "Accept":"*/*",
        "Accept-Encoding":"gzip, deflate",
        "Accept-Language":"zh-CN,zh;q=0.8",
        "Connection":"keep-alive",
        "Content-Length":postData.length,
        "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8",
        "Cookie":"UM_distinctid=15f100dc204263-0060177c45c139-404c0628-100200-15f100dc2051cf; PHPSESSID=j8e4r6anad6no4jbr21hbbbjr4; MEIQIA_EXTRA_TRACK_ID=0v4BSdQcFIcyupeIQhF9oHZ7Sjj; CNZZDATA1256018185=1057478597-1507798971-%7C1508225532; Hm_lvt_9f92046de4640f3c08cf26535ffdd93c=1507802858,1508228398,1508228403; Hm_lpvt_9f92046de4640f3c08cf26535ffdd93c=1508228655; Invite_code=295142",
        "Host":"www.codingke.com",
        "Origin":"http://www.codingke.com",
        "Referer":"http://www.codingke.com/v/3098-lesson-266-course",
        "User-Agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36",
        "X-CSRF-Token":"37edbd44469b6d4642c8544f464a8033c9f09ed1",
        "X-Requested-With":"XMLHttpRequest"
    }
}


// 请求服务器 

const request = http.request(options,(res)=>{
    console.log(`状态码:   ${res.statusCode}`);
    console.log(`请求头:  ${querystring.stringify(res.headers)}`);

    res.setEncoding("utf8");
    // 监听提交数据的过程
    res.on("data",(chunk)=>{
        console.log("响应主体:"+chunk+"");
    });

    res.on("end",()=>{
        console.log("数据插入成功!");
    })
})

request.on("error",function(err){
    console.log(err.message);
})
// 写入数据到请求主体
request.write(postData);

request.end();

