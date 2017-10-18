console.log("first web erver");

const http = require("http");   //http node模块

const hostname = "localhost";    // 服务器主机

const port = 7000;    // 服务器 端口

// request     请求   前端向后面发送的请求  包括参数(data)
// response    响应   后端(服务器端)向前端(客户端) 的响应 (返回的数据)

const server = http.createServer(function(request,response){
	console.log("create server");

	response.statusCode = 200;  // 设置返回状态码200            表示成功 
	response.setHeader("Content-type","text/plain");   // 设置返回的文档类型  html/css/js
	response.end("nodeJs so easy ! \n");  

}) //创建服务器

// 启动监听服务器  
server.listen(port,hostname,()=>{
	console.log(`Server is running at http://${hostname}:${port}`)  //字符串模板 
});
