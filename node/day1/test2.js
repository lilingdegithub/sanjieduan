



var http = require("http");  // node 模块  module.exports = {createServer:funC}
var hostname = "localhost";
var port = 7000;

var UserClass = require("./userClass");

var User = require("./user");

var user1 = new UserClass("周杰伦",36,["方文山","赵本山"]);

console.log(user1.sayName())

var user2 = new UserClass("鹿晗",22,["关晓彤"])

var user3 = new User("zuozuomu",28,["杰哥"],"daydayup");

console.log(user3.sayName());
console.log(user3.word);
console.log(user3.word1);

var server = http.createServer((req,res)=>{
	// 响应头
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

	// req.url  path 
	if(req.url!="/favicon.ico"){
		res.write("<h1>模块化开发</h1>");
		res.write(`<h1>${user1.sayName()}</h1>`);
		res.write(`<h1>${user1.sayFriend()}</h1>`);
		user1.friends.push("丽丽");
		res.write(`<h1>${user1.sayFriend()}</h1>`);
		res.write(`<h1>${user2.sayFriend()}</h1>`);



		res.end();
	}
});


// 监听服务器  监听端口 7000
server.listen(port,hostname,()=>{
	console.log(`the Server is running at http://${hostname}:${port}`);
})





