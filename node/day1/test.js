
//   ./表示统计目录  /根目录
var word=require("./module");

console.log(word);

var http=require("http");//module.exports={creatServer:funC}

var hostname="localhost";
var port=7000;
var server=http.creatServer((req,res)=>{
	//响应头
	res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
	if(req.url!="/favicon.ico"){
		console.log("module");
			res.write("module");//输出模板的内容
	        res.write(`<h1>${word}</h1>`);
	        res.write(`<h1>${word.fn.add(10,2)}</h1>`)
	        res.write(`<h1>${word.fn.sayHello()}</h1>`)
	        word.fn.write(res,"<h1>你最近好吗？</h1>")
	        write(res);
	       res.end();//响应数据结束
	}
});

//监听服务器 监听端口 7000
server.listen(port,hostname,()=>{
	console.log(`Server is running at http://${hostname}:${port}`);
})

