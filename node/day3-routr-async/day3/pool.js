


// 创建连接池  

var mysql = require("mysql");

// createPool()  创建 连接对象

// 获取连接池对象 主动连接数据库
function GetPool(){
    this.flag = true;   // 判断是否连接数据库   !0  

    this.pool = mysql.createPool({
        host:"localhost",
        port:3306,
        database:"cd1706",
        user:"root",
        password:"root"
    })

    // 获取连接池对象 
    this.getpool =  function(){
        if(this.flag){
            //  连接数据库
            this.pool.on("connect",(conn)=>{
                conn.query("set session auto_increment = 1 ");
            });
            this.flag = false ;  
        }

        return this.pool;
    }

}
module.exports = GetPool;