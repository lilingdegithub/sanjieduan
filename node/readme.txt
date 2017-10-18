node

1. 什么是nodeJs
基于chrome V8引擎 的  javascript 的运行环境

使用事件驱动   event
非阻塞的I/O操作
轻量而且高效

node 直接运行并且解析  javascript代码 
提供了很多系统级别的api  (HTTP/net/url/querystring/events/file system)

node 单线程  高并发  运行速度快  

npm  包管理工具  package    package.json   最大的开源的包管理器  (bower)




2. 模板引擎  template  (快速解析html)

jade    
EJS   
handlebars
artTemplate
smart 

Forever 
PM2      负载均衡


模块化开发规范
grunt
gulp  实现项目工程自动化  
webpack 
项目模块化开发和自动化开发

Mocha
Karma  测试工具  


3. 安装


v6.9.4 LTS    长期持久稳定版本
v7.4.0 Current   当前最新版本



4. linux 指令          
cmd  控制台
D:  直接切换到硬盘 D
ls 显示当前文件夹得所有的文件目录
tab  自动补全
cd    切换到对应的文件目录
cd .. 切换到上一级文件
touch  创建文件
mkdir  创建文件夹
pwd  显示文件目录路径
rm -rf   不询问强制删除文件
ctrl+c 强制退出 当前命令



5.  Content-type  文档类型 


下面是几个常见的Content-Type:

1.text/html
2.text/plain
3.text/css
4.text/javascript
5.application/x-www-form-urlencoded
6.multipart/form-data
7.application/json
8.application/xml
...

前面几个都很好理解，都是html，css，javascript的文件类型，后面四个是POST的发包方式。



6. node 常用网站
https://segmentfault.com
https://nodejs.org/en/
https://www.npmjs.com/
https://stackoverflow.com/
https://github.com/

7.
http://localhost:7000/

http 协议
localhost  主机 IP
7000  端口

localhost:7000  域名

/  路径   path  
/favicon.ico  


8.
nodeJs+webpack 全部遵循commonJs规范  (module,exports,require);  (define)

commonJs是nodeJs+webpack实现模块开发的规范

nodeJs+webpack是commonJs这个规范的一种展现形式


9.npm  入门 
n   node 版本控制 包(下架) 
n   stable 更新node到最稳定版本
n   latest  更新到node 最新版本  
npm i forever -g      下载到全局环境   --golbal
npm uninstall forever -g   从全局环境卸载   
npm init 项目包管理初始化  生成package.json  

npm install/i underscore 下载到node_modules 但是没有在 package.json 配置文件声明
npm i underscore --save-dev  -D    开发依赖   devDependencies   辅助开发 
npm i underscore --save    -S     项目依赖   dependencies      项目始终需要

npm uni babel-cli -D   卸载  
npm uni babel-cli -S   卸载  

rm -rf node_modules 
npm install  下载package 根据  package.json 
tree 查看文件名称树形图
npm info underscore   查看插件的具体信息 
npm list underscore   查看插件的版本
npm i underscore@1.8.0 -D  下载指定版本的插件

npm i nrm -g   
nrm ls 查看当前源 

淘宝镜像 
npm install -g cnpm --registry=https://registry.npm.taobao.org 
cnpm -v 查看版本

10.node API
url
url.parse(urlString[, parseQueryString[, slashesDenoteHost]])   解析url地址 
url.format(urlObject)   跟url.parse相反  
url.resolve(from, to)   拼接  

url.parse("http://www.baidu.com:7000/node.php?name=qianfeng&course=node#lever1")

querystring
escape    编码  utf-8
unescape  解码
encode    
decode   
encodeURI
decodeURI

day2

querystring.parse()    把字符串转为对象
querystring.stringify   把对象转为字符串    

JSON.parse()
JSON.stringify()

querystring.stringify({name:"qianfeng",course:["node","react"],from:""},"&")
'name=qianfeng&course=node&course=react&from='
 querystring.stringify({name:"qianfeng",course:["node","react"],from:""},",")
'name=qianfeng,course=node,course=react,from='
 querystring.stringify({name:"qianfeng",course:["node","react"],from:""},"|")
'name=qianfeng|course=node|course=react|from='
 querystring.stringify({name:"qianfeng",course:["node","react"],from:""},",",":")
 'name:qianfeng,course:node,course:react,from:'

  querystring.parse('name=qianfeng&course=node&course=react&from=')
{ name: 'qianfeng', course: [ 'node', 'react' ], from: '' }
>  querystring.parse('name=qianfeng&course=node&course=react&from=',",")
{ name: 'qianfeng&course=node&course=react&from=' }
> querystring.parse('name=qianfeng,course=node,course=react,from=',",")
{ name: 'qianfeng', course: [ 'node', 'react' ], from: '' }
> querystring.parse( 'name:qianfeng,course:node,course:react,from:',",",":")
{ name: 'qianfeng', course: [ 'node', 'react' ], from: '' }

文件系统
得到文件与目录的信息：stat
创建一个目录：mkdir
创建文件并写入内容：writeFile,appendFile
读取文件的内容：readFile
列出目录的东西：readdir
重命名目录或文件：rename
删除目录与文件：rmdir,unlink

day2

1.cheerio  后台解析数据  npm i cheerio -D
*get,post 灌水 还没完成
2.路由是重点

day3

1.路由的登录 置换 正则等
2.异步流程控制  npmjs网站=>nsync

https://www.npmjs.com/

https://caolan.github.io/async/

npm i async -S

serise   串行无关联  事件执行按书写顺序一个接一个执行，跟时间无关，如果有一个事件返回ERR,则
同步  2个参数  第一个参数是数组/对象  第二个是函数
异步  


parallel 并行无关联  所有事件同时执行 不会产生阻塞
同步  []返回数组   输出结果跟事件先后有关 跟时间无关   执行时间按最长的算
异步  {}    输出结果的顺序跟执行时间有关  时间少先输出

waterfall串行有关联 
事件1的结果传入 事件2
最后回答函数 得到 所有的结果 null和result一一对应
async.waterfall([
    function(callback){
        callback(null,"one","two");
    },
    function(arg1,arg2,callback){   // arg1 = one arg2 = two 
        callback(null,arg1,arg2,"three");
    },
    function(arg1,arg2,arg3,callback){
        callback(null,[arg1,arg2,arg3,"four","done"]);
    }
],function(err,result){
    if(err) throw err;
    console.log(result);
})




whilst 并行有关联
// whilst  并行有关联
// var count = 0;
// async.whilst(
//     function() { return count < 5; },
//     function(callback) {
//         count++;
//         setTimeout(function() {
//             callback(null, count);
//         }, 1000);
//     },
//     function (err, n) {
//         // 5 seconds have passed, n = 5
//         if(err) throw err;
//         console.log(n);
//     }
// );


3.mongoDB

4.配置环境变量

计算机----属性（右键）----高级系统设置----环境变量---系统环境变量
找到Path 
添加; 添加路径  C:\Program Files\MySQL\bin;
services.msc  进入服务

5.MySQL

mysql 修改密码(管理员权限)
1. 切换到mysql的bin路径  (配置环境变量就不需要)
2. mysqld --initialize 初始化msyql
3. mysqld install 创建mysql 服务 

4. net start mysql 启动服务(必须管理员权限)
5. net stop mysql  关闭服务 

6. 关闭服务后  输入 mysqld --skip-grant-tables  跳过授权表认证  不需要密码直接登录
直接输入 mysql 就进入 mysql 控制台 

mysql -hlocalhost -uroot -p      主机  用户名  密码

mysql -uroot -proot  直接登录

update user set authentication_string=password("root") where user="root"
update user set password=password(“newpassword“) where user=”root”
flush privileges;

update user set authentication_string=password("root") where user="root"
update user set password=password("root") where user="root"
flush privileges;

step 1: SET PASSWORD = PASSWORD('your new password');    

step 2: ALTER USER 'root'@'localhost' PASSWORD EXPIRE NEVER;

step 3: flush privileges;

mysql 基本语句
show databases;  显示当前数据库
use mysql  使用当前数据库   
show tables;   显示当前数据库下的表
desc user;   查看表结构 
create database cd1706 创建数据库 

创建表 
-> create table if not exists person(
-> id int not null auto_increment,
-> name varchar(20),
-> age int,
-> primary key(id)
-> );

 create table chengdu1706(
 id int not null auto_increment,
 stdno int,
 name varchar(12),
 age int,
 birthday date,
 salary int,
 word varchar(20),
 primary key(id)
 );

增删改查

 1.插入 添加数据 insert into
 insert into userinfo (id,username,password) values (1,"zuozuo","root");
 insert into userinfo (username,password) values ("mingming","abc123");
 insert into userinfo values (3,"xiaohua","qwer12");

 insert into article values (1,"mingming","abc","daydayup",now()); 
 insert into article values (4,"zuozuomu","eat","go to eat huoguo",timestamp());
表示当前时间戳 
 now() timestamp()

 2. 修改 update set
update userinfo set password = "root123" where username = "zuozuo";
mysql> update userinfo set  username = "zuozuomu" where id = 1 and password = "r
oot123";

3. 删除 数据
delete from userinfo; 
delete from userinfo where id = 1;

drop table userinfo; 删表
drop table cd1706 删除数据库
truncate table userinfo 清空数据表 

4. 查询 select  
select * from userinfo;
select username ,password from userinfo;
select * from article order by author;  排序  默认升序 
select * from article order by id desc; 排序  降序  desc  表示降序 
select * from article order by author desc,content desc; author 降序 content 降序 
select * from article limit 3; 限制3条数据
select * from article where author = "mingming" order by enterdate limit 1;
select count(*),author from article group by author; 分组查询
select min(enterdate),author from article group by author;  
select max(salary),department from emp group by department; 

mysql> select * from emp where salary in (select max(salary)  from emp group by
department);


select * from emp where age in (select max(age) from emp group by department);

mysql> select * from  emp where salary in (10000,12000);  或者   

select * from emp where age in (22,28);

select * from emp where age = 22 or  age = 28;



select * from emp where age > 20 and age < 26;


关联表查询

select * from emp , userinfo where emp.name = userinfo.username;  
select * from emp e,userinfo u where e.name = u.username; 
select * from article a ,emp e where e.name = a.author and e.age > 24 and
 a.id<5;
select * from article where author  = (select name from emp order by age
desc limit 1);

模糊查询  like  %%
select * from article where author like "ming%";
select * from article where author like "%zuo%";
select * from article where author like "%hua";


集合拼接
 select * from  article ,emp;
 inner join 内连接查询
 left join  左连接
 right join 右连接查询

  select * from article inner join emp on article.author = emp.name;  求2个集合的交集
  select * from article left join emp on article.author = emp.name;   求2个表的相交部分 左表全部查出, 右表不相交部分为null
  select * from article right join emp on article.author = emp.name;   求2个表的相交部分 右表全部查出, 左表不相交部分为null
  



mysql_1.npm i mysql -s

创建连接对象

连接数据库

操作数据库


关闭数据库连接

创建服务器 存 访问数据库json

mysql_2
复习作业  今天 的demo
 
登录注册+mysql+async 案例完成  完成相关的逻辑判断 (必须插入本地数据库 ) ming天检查
