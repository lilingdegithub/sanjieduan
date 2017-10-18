var http=require("http");

var url="http://www.qfedu.com/";

var querystring=require("querystring");

var cheerio=require("cheerio");//后台解析数据

var fs=require("fs");

var fileWriteS=fs.createWriteStream("qianf.html",{encoding:"utf8"});

http.get(url,(res)=>{
    console.log(`状态码:${res.statusCode}`);
    console.log(`请求头:${querystring.stringify(res.headers)}`);

    var html="";

    //监听数据传输
    res.on("data",(chunk)=>{
        console.log(chunk);
        html+=chunk;
    })


  // 完毕 
  res.on("end",()=>{
    console.log("数据传输完毕");
    console.log(html);
    var data = printData(html);
    readFile(data);
   })

//错误 
res.on("error",(err)=>{
    console.log(err);
    });
});

function printData(html){
    var $=cheerio.load(html);
    var mingshi=$(".con4 li");
    var mingshiData=[];
    mingshi.each((index,value)=>{
        var mingshitxt=$(value).find("h6").text();
        var mingshijieshao=$(value).find("i").text();
       
        console.log(mingshitxt);
        console.log(mingshijieshao);

        mingshiData.push({
             mingshitxt:mingshitxt,
             mingshijieshao:mingshijieshao
                })
    });

   return mingshiData;

}

//读取到本地

function readFile(data){
    data.forEach((value,index)=>{
        //遍历数据
        fs.appendFile("getmingshi.txt",value.mingshitxt+"\n","utf-8",(err)=>{
            if(err) throw err;
            console.log("名师名字写入成功！");
        });

        fs.appendFile("getmingshi.txt",value.mingshijieshao+"\n","utf-8",(err)=>{
            if(err) throw err;
            console.log("名师介绍写入成功！")
        })
    })
};