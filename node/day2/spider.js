
var https = require("https");  //https

var url = "https://www.lagou.com/";

var querystring = require("querystring");

var cheerio = require("cheerio");  // 后端解析HTML 类似jquery 

var fs = require("fs");

var fileWriteSteam = fs.createWriteStream("lllggg.html",{encoding:"utf8"});


https.get(url,(res)=>{
    console.log(`状态码: ${res.statusCode}`);
    console.log(`请求头: ${querystring.stringify(res.headers)}`);

    var html = "";   

    // 监听数据传输  
    res.on("data",(chunk)=>{
        console.log(chunk);
        html+=chunk;
        // fileWriteSteam.write(chunk);
    });

    // 监听数据传输完毕 
    res.on("end",()=>{
        console.log("数据传输完毕");
        console.log(html);
        var data = printData(html);
        readFile(data);
    })

    // 监听数据传输错误 
    res.on("error",(err)=>{
        console.log(err);
    });
});

//  id = "box"    $("#box")  var box = document.querySelector("#box");

// jquery对象转DOM对象   $("#box")[0]  $("#box").get(0) 

// DOM 对象转juqery对象    box  === >  $(box)


function printData(html){
    var $ = cheerio.load(html);
    var menu = $(".menu_main");    // 伪数组 
    var menuData = [];
    menu.each((index,value)=>{
        
        var menuTitle = $(value).find("h2").text();
        var menuLists = $(value).find("a");
        console.log(menuTitle);

        var menuList = [];
        menuLists.each((index,item)=>{
            menuList.push($(item).text());
            console.log($(item).text());
        })

        menuData.push({
            menuTitle:menuTitle,
            menuList:menuList
        })
    });

    return menuData;
}


// 抓出来的数据读取到 本地 txt 

function readFile(data){
    data.forEach((value,index)=>{
        // 遍历数据 
        
        fs.appendFile("getData.txt",value.menuTitle+"\n","utf-8",(err)=>{
            if(err) throw err;
            console.log("数据写入成功");
        });

        value.menuList.forEach((item,index)=>{
            fs.appendFile("getData.txt",item+"\n","utf-8",(err)=>{
                if(err) throw err;
                console.log("数据写入成功");
            });
    
        })
    })
};





