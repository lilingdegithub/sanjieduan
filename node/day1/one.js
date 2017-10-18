console.log("first web erver");
const http = require("http");
const hostname ="localhost";
const port =7000;
const server = http.createServer(function(request,response){
	console.log("create server")
	response.statusCode = 200;
	response.setHeader("Content-type","text/plain");
	response.end("nodeJS so easy")
})
server.listen(port,hostname,()=>{
	console.log(`Server is running at http://${hostname}:${port}`)
})
