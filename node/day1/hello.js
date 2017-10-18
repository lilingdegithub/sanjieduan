console.log("hello");

let http = require("http");
let hostname = "localhost";
let port = 7000;
let word = "成都1706,daydayup！!";
var server = http.createServer((req,res)=>{
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
	if(req.url!="/favicon.ico"){ 
		console.log("nodenodenode");
		console.log(req.url);     //   /    /favicon.ico  
		res.write("hello world");
		res.write("<p>你好,成都!!!</p>");  //直接写入html
		res.write(`<h1>${word}</h1>`);
		res.end();    //响应数据结束 
	}
	 
});


server.listen(port,hostname,()=>{
	console.log(`Server is running at http://${hostname}:${port}`)
})