

//  通过mysql 连接池  连接 数据库

var Pool = require("./pool");

var pool = new Pool();  // 实例化 

var conn = pool.getpool();   // 通过连接池 获取连接对象

var http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    if(req.url!="/favicon.ico"){
        conn.getConnection((err,cn)=>{
            if(err) throw err;
            console.log("数据库连接成功!")
            //  后面 操作数据库  
            // var insertSql = "insert into userinfo values (123,'dazuo','ssss')";
            var selectSQL= "select * from article";
            var selectParams = [];
            cn.query(selectSQL,(err,result)=>{
                if(err) throw err;
                console.log("查询成功!")
                console.log(result);
                // ==============  result 需要进行类型转换 转为 字符串  
                result = JSON.stringify(result);    
                res.write(result);
                res.end();
            });
           
            cn.release();   // 释放连接 
        })
       
    }

}).listen(7000,"localhost",()=>{
    console.log("server is running at http://localhost:7000")
})