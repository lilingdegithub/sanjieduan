

//  ./ 表示同级目录   / 根目录  
var word = require("./module");
var say = require("./demo");
console.log(say);
console.log(word);


var http = require("http");  // node 模块  module.exports = {createServer:funC}

var hostname = "localhost";

var port = 7000;


var server = http.createServer((req,res)=>{
	// 响应头
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

	// req.url  path 
	if(req.url!="/favicon.ico"){
		console.log("module");
		res.write(`<h1>${word.word}===${say}<h1>`);
		res.write(`<h2>${word.fn.sayHello()}</h2>`);
		res.write(`<h3>${word.fn.add(10,2)}</h3>`);
		word.fn.write(res,"<h1>你最近开心吗?</h1>");
		write(res);
		res.end();
	}
});

function write(response){
	response.write("<h1>快乐开心每一天!</h1>");
}


// 监听服务器  监听端口 7000
server.listen(port,hostname,()=>{
	console.log(`the Server is running at http://${hostname}:${port}`);
})





