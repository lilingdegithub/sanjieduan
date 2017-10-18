

//  nodeJs 连接mysql 操作数据库 

var mysql = require("mysql");

console.log(mysql);

// 创建连接对象 
var  conn = mysql.createConnection({
    host:"localhost", //主机
    port:3306,
    user:"root",
    password:"root",
    database:"cd1706",
});


// 连接数据库
conn.connect((err)=>{
    if(err){
        console.log(err);
        console.log("数据库连接失败")
    }else{
        console.log("数据库连接成功,等待操作!");
    }
})

// 操作数据库  query 
// var insertSQL = "insert into userinfo (id,username,password) values (11,'zklzkl','cd1234')";
var insertSQL = "insert into userinfo (id,username,password) values (?,?,?)"; //? 表示参数 防止sql注入
var insertParams = [33,"pengzhanzhen","123456"];


conn.query(insertSQL,insertParams,function(err,result){
    if(err) throw err;
    console.log("数据插入成功");
    console.log("=====================================");
    console.log(result);
    console.log("=====================================");
});

var selectSql = "select * from emp  where id > ? ";
var selectParams = [0];
conn.query(selectSql,selectParams,(err,result)=>{
    if(err) throw err;
    console.log("数据插入成功");
    console.log("=====================================");
    // res.write(result);
    console.log(result);
    console.log("=====================================");
});

var updateSql = "update article set title = ? where author = ? ";
var updateParams = ["eat123456","zuozuomu"];
conn.query(updateSql,updateParams,(err,result)=>{
    if(err) throw err;
    console.log("数据修改成功");
    console.log("=====================================");
    // res.write(result);
    console.log(result);
    console.log("=====================================");
});

// 关闭数据库连接
conn.end(()=>{
    console.log("你已经断开连接!");
});



